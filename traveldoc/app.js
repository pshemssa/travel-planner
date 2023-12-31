// app.js
function getWeather() {
    const apiKey = '6993c51d9ed48a0f6abc8451b3433bb1';
    const cityInput = document.getElementById('cityInput').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;
  
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
  }
  