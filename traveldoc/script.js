const apiKey = '6993c51d9ed48a0f6abc8451b3433bb1'; // Replace with your actual API key from OpenWeatherMap

const searchButton = document.getElementById('searchButton');
const cityInput = document.getElementById('cityInput');
const currentWeatherDiv = document.getElementById('currentWeather');
const forecastDiv = document.getElementById('forecast');

searchButton.addEventListener('click', () => {
    const cityName = cityInput.value;
    if (cityName) {
        fetchWeatherData(cityName);
        fetchForecastData(cityName);
    }
});

async function fetchWeatherData(cityName) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`);
    const data = await response.json();
    
    const temperature = data.main.temp;
    const description = data.weather[0].description;

    currentWeatherDiv.innerHTML = `
        <h2>Current Weather in ${cityName}</h2>
        <p>Temperature: ${temperature}°C</p>
        <p>Description: ${description}</p>
    `;
}

async function fetchForecastData(cityName) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=metric`);
    const data = await response.json();
    
    const forecastItems = data.list.slice(0, 5); // Get the first 5 forecast items
    
    let forecastHTML = '<h2>5-Day Forecast</h2>';
    forecastItems.forEach(item => {
        const dateTime = new Date(item.dt * 1000);
        const temperature = item.main.temp;
        const description = item.weather[0].description;
        
        forecastHTML += `
            <div class="forecast-item">
                <p>Date/Time: ${dateTime.toLocaleString()}</p>
                <p>Temperature: ${temperature}°C</p>
                <p>Description: ${description}</p>
            </div>
        `;
    });

    forecastDiv.innerHTML = forecastHTML;
}
