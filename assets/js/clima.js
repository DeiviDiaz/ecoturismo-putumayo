const API_KEY = "cda553e691e069d81eea61a29ee15823";

const weatherContent = document.getElementById("weatherContent");

async function obtenerClima() {
    if (!weatherContent) return;

    try {
        const respuesta = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=Mocoa,CO&appid=${API_KEY}&units=metric&lang=es`
        );

        const datos = await respuesta.json();

        if (!respuesta.ok) {
            const mensaje = datos.message || "Error en la API del clima";
            throw new Error(mensaje);
        }

        if (!datos.weather || !datos.weather.length || !datos.main) {
            throw new Error("Respuesta de clima incompleta");
        }

        weatherContent.innerHTML = `
            <img
                src="https://openweathermap.org/img/wn/${datos.weather[0].icon}@2x.png"
                alt="${datos.weather[0].description}"
            >

            <div class="weather-temp">
                ${Math.round(datos.main.temp)}°C
            </div>

            <div class="weather-description">
                ${datos.weather[0].description}
            </div>

            <p>
                Humedad: ${datos.main.humidity}%
            </p>

            <p>
                Sensación térmica:
                ${Math.round(datos.main.feels_like)}°C
            </p>
        `;
    } catch (error) {
        weatherContent.innerHTML = `
            <p>No se pudo cargar la información climática.</p>
            <p>${error.message}</p>
        `;

        console.error("Error al cargar el clima:", error);
    }
}

obtenerClima();
