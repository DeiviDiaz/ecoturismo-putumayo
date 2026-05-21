const darkModeBtn = document.getElementById("darkModeBtn");

const body = document.body;

// Verificar si existe tema guardado
const darkMode = localStorage.getItem("darkMode");

if (darkMode === "active") {

    body.classList.add("dark-mode");

}

// Evento botón
darkModeBtn.addEventListener("click", () => {

    body.classList.toggle("dark-mode");

    // Guardar estado
    if (body.classList.contains("dark-mode")) {

        localStorage.setItem("darkMode", "active");

    } else {

        localStorage.setItem("darkMode", null);

    }

});