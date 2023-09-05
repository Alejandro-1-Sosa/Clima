const apiKey = '75a755c5bee6d93e47a42db6672f79ce';

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
            const description = data.weather[0].description;
            const cityName = data.name;

            weatherInfo.innerHTML = `
            <span style="font-size: 30px; color: black; text-transform: capitalize;">
                Weather in ${cityName}:<br> ${description}, <br>Temperature: ${temperature}°C
            </span>`;
               
        })
        .catch((error) => {
            console.error(error);
            weatherInfo.innerHTML = 'Error fetching weather data.';
        });
    }

});



