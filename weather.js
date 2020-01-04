//https://home.openweathermap.org/api_keys

const API_KEY = "06da9d5068ee6f135e90b69ebe5ea456";
const COORDS = "coords";

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = { latitude, longitude };
  //자바스크립트의 특징중 하나인데. 객체 변수 이름과  객체의 key 이름을 같게 할려면
  //이렇게 가능
  saveCoords(coordsObj);
  //위도와 경도를 읽어온다.
}

function handleGeoError() {
  console.log("Cant access geo location");
}

//좌표를 요청하는 함수를 만들어봅시다. navigator API사용
function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    //getWeather
  }
}

function init() {
  loadCoords();
}

init();
