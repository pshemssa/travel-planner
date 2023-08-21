const apiKey = '6259f0c19a4f72c3ee257d76d3d8c63c'; 

const cityInput = document.getElementById('city-input');
const getTemperatureBtn = document.getElementById('get-temperature-btn');
const temperatureDisplay = document.getElementById('temperature-display');

getTemperatureBtn.addEventListener('click', async () => {
  const city = cityInput.value;
  
  if (city) {
    const weatherData = await fetchWeather(city);
    displayWeatherData(weatherData);
  } else {
    temperatureDisplay.textContent = 'Please enter a city.';
  }
});

async function fetchWeather(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    
    if (response.ok) {
      return {
        temperature: data.main.temp,
        description: data.weather[0].description
      };
    } else {
      throw new Error(data.message || 'Failed to fetch weather data.');
    }
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
}

function displayWeatherData(weatherData) {
  temperatureDisplay.textContent = `Current temperature in ${city}: ${weatherData.temperature}°C`;
  
}

