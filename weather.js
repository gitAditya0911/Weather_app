const apiKey = '21d3ef6734432993292623759d371634';

async function getWeather(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiUrl);
    
    if (!response.ok) {
      const errorData = await response.json(); 
      throw new Error(`Error ${errorData.cod}: ${errorData.message}`);
    }

    const data = await response.json();

    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const iconCode = data.weather[0].icon; 
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`; 

    const weatherInfo = document.getElementById('weather-info');
    weatherInfo.innerHTML = `
      <div class="weather-card">
        <h2>Weather in ${city}</h2>
        <p>Temperature: ${temperature}°C</p>
        <p>Description: ${description}</p>
        <img src="${iconUrl}" alt="${description}" class="weather-icon">
      </div>
    `;

  } catch (error) {
    console.error("Error fetching weather:", error);
    const weatherInfo = document.getElementById('weather-info');
    weatherInfo.innerHTML = `<p class="error">Error: ${error.message}</p>`; 
  }
}

async function getLocationWeather() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

      try {
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
          const errorData = await response.json(); 
          throw new Error(`Error ${errorData.cod}: ${errorData.message}`);
        }

        const data = await response.json();

        const temperature = data.main.temp;
        const description = data.weather[0].description;
        const iconCode = data.weather[0].icon; 
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

        const weatherInfo = document.getElementById('weather-info');
        weatherInfo.innerHTML = `
          <div class="weather-card">
            <h2>Weather at your location</h2>
            <p>Temperature: ${temperature}°C</p>
            <p>Description: ${description}</p>
            <img src="${iconUrl}" alt="${description}" class="weather-icon">
          </div>
        `;

      } catch (error) {
        console.error("Error fetching weather:", error);
        const weatherInfo = document.getElementById('weather-info');
        weatherInfo.innerHTML = `<p class="error">Error: ${error.message}</p>`; 
      }
    }, (error) => {
      console.error("Error getting location:", error);
      const weatherInfo = document.getElementById('weather-info');
      weatherInfo.innerHTML = `<p class="error">Error: ${error.message}</p>`;
    });
  } else {
    console.error("Geolocation is not supported by this browser.");
    const weatherInfo = document.getElementById('weather-info');
    weatherInfo.innerHTML = `<p class="error">Geolocation is not supported by this browser.</p>`;
  }
}

document.getElementById('search-button').addEventListener('click', () => {
  const cityInput = document.getElementById('city-input');
  const city = cityInput.value.trim(); 
  if (city) { 
    getWeather(city);
  }
});


window.onload = getLocationWeather;
