// app.js
document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
    const city = 'London';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const weatherDataElement = document.getElementById('weatherData');
        weatherDataElement.innerHTML = `
          <h2>${data.name}, ${data.sys.country}</h2>
          <p>Temperature: ${data.main.temp} &#8451;</p>
          <p>Weather: ${data.weather[0].description}</p>
        `;
      })
      .catch(error => console.error('Error fetching data:', error));
  });
  