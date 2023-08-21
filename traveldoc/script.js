const apiKey = '6259f0c19a4f72c3ee257d76d3d8c63c'; // Replace with your actual API key

const cityInput = document.getElementById('city-input');
const getTemperatureBtn = document.getElementById('get-temperature-btn');
const temperatureDisplay = document.getElementById('temperature-display');

getTemperatureBtn.addEventListener('click', async () => {
  const city = cityInput.value;
  
  if (city) {
    const temperature = await fetchTemperature(city);
    temperatureDisplay.textContent = `Current temperature in ${city}: ${temperature}°C`;
  } else {
    temperatureDisplay.textContent = 'Please enter a city.';
  }
});

async function fetchTemperature(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    
    if (response.ok) {
      return data.main.temp;
    } else {
      throw new Error(data.message || 'Failed to fetch temperature.');
    }
  } catch (error) {
    console.error('Error fetching temperature:', error);
    throw error;
  }
}
