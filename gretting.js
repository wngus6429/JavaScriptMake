/** @format */

const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  //이걸 추가 함으로서 입력해서 앤터쳐도 글시가 사라지지 않음. 새로고침 되지 않음
  const currentValue = input.value; //input 박스에 내가 입력
  paintGreeting(currentValue); //입력한걸 새로운 박스에 담는 작업
  saveName(currentValue); //입력한걸 로컬에 저장하는 기능
}

function askForName() {
  form.classList.add(SHOWING_CN); //form classList에 showing을 추가함
  form.addEventListener("submit", handleSubmit); //앤터 누르면 handlesubmit작동
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN); // 클래스에 showing추가한거 없애고
  greeting.classList.add(SHOWING_CN); // 새로운 클래스에 showing추가하면서 입력한거 들어감
  greeting.innerText = `Hello ${text}`; //입력한거 앞에 Hello 추가
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS); //기존에 있나? 없으면 당연 만들어야지
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
