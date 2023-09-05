
const apiKey = '75a755c5bee6d93e47a42db6672f79ce';

// Mapeo de traducciones de descripciones de clima
const descripcionTraducida = {
  "clear sky": "cielo despejado",
  "few clouds": "pocas nubes",
  "scattered clouds": "nubes dispersas",
  "partly cloudy": "parcialmente nublado",
  "overcast clouds": "nublado",
  "mist": "niebla",
  "light rain": "lluvia ligera",
  "moderate rain": "lluvia moderada",
  "heavy intensity rain": "lluvia intensa",
};

const weatherForm = document.getElementById("Weather-form");
const cityInput = document.getElementById ("city-input");
const weatherInfo = document.getElementById ("Weather-info");

weatherForm.addEventListener ('submit', (e) => {
    e.preventDefault();
    const city = cityInput.value.trim ();

    if (city) {
        fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then ((response) => response.json())
        .then ((data) => {
            const temperature = data.main.temp;
            const descripcionEnIngles = data.weather[0].description;
            const cityName = data.name;

            // Traducir la descripción del clima
            const descripcionEnEspanol = descripcionTraducida[descripcionEnIngles.toLowerCase()] || descripcionEnIngles;

            weatherInfo.innerHTML = `
            <span style="font-size: 30px; color: black; text-transform: capitalize;">
                Clima en ${cityName}:<br> ${descripcionEnEspanol}, <br>Temperatura: ${temperature}°C
            </span>`;
               
        })
        .catch((error) => {
            console.error(error);
            weatherInfo.innerHTML = 'Error al obtener datos del clima.';
        });
    }
});



