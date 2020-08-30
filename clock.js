/** @format */

const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date(); //여기에서 Date는 클래스임
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
  //이렇게 해야 분, 초 앞에 0이 붙는다.
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
