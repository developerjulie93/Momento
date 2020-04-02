const weathers = document.querySelector("#jsWeather"),
        firstChild = weathers.querySelector("#icon_temp"),
        secondChild = weathers.querySelector("#city");

const COORDS = "coords";
const API_KEY = "c977126c42ab7bf96050475f273d5231";

function getWeather(lat, lon){
    fetch(
        `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    ).then(function (response){
        return response.json();
    }).then(function (json){
        const temp = json.main.temp;
        const city = json.name;
        const icon = json.weather[0].icon;
        firstChild.innerHTML = `${icon} & ${temp}`;
        secondChild.innerHTML = `${city}`;
    });
}
function handleSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordObj = {
        latitude: latitude,
        longitude: longitude,
    };
    localStorage.setItem(COORDS, JSON.stringify(coordObj));
    getWeather(latitude, longitude);
}
function handleError(){
    console.log("Can't find current position.");
}
function createCoords(){
    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
}
function loadCoords(){
    const loadCoord = localStorage.getItem(COORDS);
    if(loadCoord === null){
        createCoords();
    }else{
        const parsedCoords = JSON.parse(loadCoord);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function init(){
    loadCoords();
}
init();