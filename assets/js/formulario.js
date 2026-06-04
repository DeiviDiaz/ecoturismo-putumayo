const form = document.getElementById("contactForm");
const alertBox = document.getElementById("formAlert");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const nombre =
        document.getElementById("nombre").value.trim();

    const correo =
        document.getElementById("correo").value.trim();

    const telefono =
        document.getElementById("telefono").value.trim();

    const mensaje =
        document.getElementById("mensaje").value.trim();

    if (nombre.length < 3) {

        mostrarError(
            "El nombre debe tener mínimo 3 caracteres."
        );

        return;
    }

    if (!correo.includes("@")) {

        mostrarError(
            "Ingrese un correo válido."
        );

        return;
    }

    if (isNaN(telefono)) {

        mostrarError(
            "El teléfono debe contener solo números."
        );

        return;
    }

    if (mensaje.length < 10) {

        mostrarError(
            "El mensaje debe tener mínimo 10 caracteres."
        );

        return;
    }

    alertBox.innerHTML = `

        <div class="alert alert-success">

            Mensaje enviado correctamente.

        </div>

    `;

    form.reset();

});

function mostrarError(texto) {

    alertBox.innerHTML = `

        <div class="alert alert-danger">

            ${texto}

        </div>

    `;
}
