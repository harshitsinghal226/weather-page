const apiKey = "50af57d09d00eceaf2eeebd6205b8788";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
      document.querySelector(".weather-icon").src = "images/clouds.png";
    } else if (data.weather[0].main == "Rain") {
      document.querySelector(".weather-icon").src = "images/rain.png";
    } else if (data.weather[0].main == "Clear") {
      document.querySelector(".weather-icon").src = "images/clear.png";
    } else if (data.weather[0].main == "Snow") {
      document.querySelector(".weather-icon").src = "images/snow.png";
    } else if (data.weather[0].main == "Drizzle") {
      document.querySelector(".weather-icon").src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      document.querySelector(".weather-icon").src = "images/mist.png";
    } else if (data.weather[0].main == "humidity") {
      document.querySelector(".weather-icon").src = "images/humidity.png";
    } else {
      document.querySelector(".weather-icon").src = "images/clear.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBox.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    checkWeather(searchBox.value);
  }
});
searchButton.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
