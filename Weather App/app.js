const api_key = "bf60af70b933f53427ac3743927132f8";
const api_url =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

let input = document.querySelector(".search input");
let btn = document.querySelector(".search button");
let weathetIcon = document.querySelector(".weather_icon");

btn.addEventListener("click", () => {
    checkWeather(input.value);
  });

async function checkWeather(city) {
  const response = await fetch(api_url + city + `&appid=${api_key}`);

  if (response.status == 404) {
    document.querySelector('.error').style.display = "block";
    document.querySelector('.weather').style.display = "none";
  } else {
    var data = await response.json();
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
      weathetIcon.src = "./assist/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weathetIcon.src = "./assist/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weathetIcon.src = "./assist/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weathetIcon.src = "./assist/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weathetIcon.src = "./assist/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector('.error').style.display = "none";
  }
}


