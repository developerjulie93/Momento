const weather = document.querySelector(".weather");

const COORDS = "coords";
const API_KEY = "c977126c42ab7bf96050475f273d5231";
function getWeather(lat, lon){
    fetch(
        `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
        ).then(function (response){
            return response.json();
        })
        .then(function (json){
            const temp = json.main.temp;
            const place = json.name;
            weather.innerHTML = `${temp} & ${place}`;
        });
}
function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude: latitude,
        longitude: longitude,
    };
    localStorage.setItem("COORDS", JSON.stringify(coordsObj));
    getWeather(latitude, longitude);
}
function handleGeoError(){
    console.log("Can't access geo location");
}
function createCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}
function loadCoords(){
    const loadCoords = localStorage.getItem("COORDS");
    if(loadCoords === null){
        createCoords();
    }else{
        const parsedCoords = JSON.parse(loadCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);

    }
}
function init(){
    loadCoords();
}
init();