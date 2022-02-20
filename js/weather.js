const API_KEY = "09497018c4fe849229c5e9a661dbe2c0";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log(lat, lng)
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url)
  .then((Response) => Response.json())
  .then((data) => { 
    const weather = document.querySelector("#weather span:first-child");
    const city = document.querySelector("#weather span:last-child");
    city.innerHTML = data.name;
    weather.innerHTML = `${data.weather[0].main} / ${data.main.temp}`;
});
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
