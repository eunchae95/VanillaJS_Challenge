const API_KEY = "f45987f8162b58290c8ad1f588b67dfb";


function onGeoOK(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    // console.log("You live in", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].description} / ${data.main.temp}℃`;

    });
}

function onGeoError(){
    console.log("Can't find you. No weather for you");
}


navigator.geolocation.getCurrentPosition(onGeoOK,onGeoError);

