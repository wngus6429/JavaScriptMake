/** @format */

//https://home.openweathermap.org/api_keys

const weather = document.querySelector(".js-weather");

const API_KEY = "06da9d5068ee6f135e90b69ebe5ea456";
const COORDS = "coords";

function getWeather(lat, lng) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      const temperature = json.main.temp;
      const place = json.name;
      weather.innerText = `${temperature} @ ${place}`;
      //콘솔이나 network에서 날아온 정보를 가지고 적어야함.
    });
} //마지막에 API_KEY 넣어줘야함、units=metri、이거는 화씨인가 뭐시기 온도 표시 바꿈

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
  getWeather(latitude, longitude);
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
    getWeather();
  }
}

function init() {
  loadCoords();
}

init();
