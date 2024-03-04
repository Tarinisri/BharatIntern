
document.getElementById("date").innerHTML = new Date().toDateString();
function getWeather() {
  const apiKey = '9132698cf0079a57523f46c2b747fc9e';
  const cityInput = document.getElementById('cityInput').value;

  if (!cityInput) {
    alert('Please enter a city name');
    return;
  }


  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const cityName = data.name;
      const temperature = data.main.temp;
      const condition = data.weather[0].description;

      document.getElementById('cityName').innerText = cityName;
      document.getElementById('temperature').innerText = `${temperature}°C`;
      document.getElementById('condition').innerText = `${condition}`;

      // Update weather icon based on temperature
      updateWeatherIcon(temperature);
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
      alert('Error fetching weather data. Please try again.');
    });
}

function updateWeatherIcon(temperature) {
  let weatherIcon;

  if (temperature < 0) {
      weatherIcon = 'freezing.png';
  } else if (temperature >= 0 && temperature < 10) {
      weatherIcon = 'cold.png';
  } else if (temperature >= 10 && temperature < 20) {
      weatherIcon = 'cool.png';
  } else if (temperature >= 20 && temperature < 30) {
      weatherIcon = 'haze.png';
  } else if (temperature >= 30 && temperature < 40) {
      weatherIcon = 'warm.png';
  } else {
      weatherIcon = 'hot.png';
  }

  document.getElementById('weatherIcon').src = weatherIcon;
}
