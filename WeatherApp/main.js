  // https://home.openweathermap.org/api_keys
  const apiKey = "1a47dbe6740f9d410b220c782697a94e";
  // api thieu city va id 
  const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

  const searchBox = document.querySelector(".search input");
  const searchBtn = document.querySelector(".search button");
  const weatherIcon = document.querySelector(".weather-icon");

  async function checkWeather(city) {
          // Construct the full API URL with the provided city and API key
          // them cac thanh phan con lai -> api hoan chinh -> render data 
      const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

      if(response.status == 404) {
            // If the city is not found, display the error element and hide the weather element
          document.querySelector(".error").style.display = "block";
          document.querySelector(".weather").style.display = "none";
      }
      else {
                          // If the response is successful, parse the response JSON into a JavaScript object
                      var data = await response.json();
          
                      // console.log(data);
                      document.querySelector(".city").innerHTML = data.name;
                      document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
                      document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
                      document.querySelector(".wind").innerHTML = data.wind.speed +"km/h";
          
                      if(data.weather[0].main == "Clouds"){
                          weatherIcon.src = "./assets/image/clouds.png";
                      }
                      else if(data.weather[0].main == "Clear") {
                          weatherIcon.src = "./assets/image/clear.png";
                      }
                      else if(data.weather[0].main == "Rain") {
                          weatherIcon.src = "./assets/image/rain.png";
                      }
                      else if(data.weather[0].main == "Drizzle") {
                          weatherIcon.src = "./assets/image/drizzle.png";
                      }
                      else if(data.weather[0].main == "Mist") {
                          weatherIcon.src = "./assets/image/mist.png";
                      }
          
                      document.querySelector(".weather").style.display = "block";
                      document.querySelector(".error").style.display = "none";
      }

  };

  searchBtn.addEventListener("click", () => {
      checkWeather(searchBox.value);
  });

  searchBox.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        checkWeather(searchBox.value);
    }
});
//   checkWeather();

//   data json 
// {
//     "coord": {
//         "lon": 13.4105,
//         "lat": 52.5244
//     },
//     "weather": [
//         {
//             "id": 803,
//             "main": "Clouds",
//             "description": "broken clouds",
//             "icon": "04d"
//         }
//     ],
//     "base": "stations",
//     "main": {
//         "temp": 294.95,
//         "feels_like": 294.6,
//         "temp_min": 293.7,
//         "temp_max": 296.47,
//         "pressure": 1011,
//         "humidity": 54,
//         "sea_level": 1011,
//         "grnd_level": 1006
//     },
//     "visibility": 10000,
//     "wind": {
//         "speed": 6.26,
//         "deg": 244,
//         "gust": 10.28
//     },
//     "clouds": {
//         "all": 75
//     },
//     "dt": 1720876506,
//     "sys": {
//         "type": 2,
//         "id": 2011538,
//         "country": "DE",
//         "sunrise": 1720839564,
//         "sunset": 1720898667
//     },
//     "timezone": 7200,
//     "id": 2950159,
//     "name": "Berlin",
//     "cod": 200
// }