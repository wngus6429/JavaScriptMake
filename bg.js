const body = document.querySelector("body");

const IMG_NUMBER = 5;

function paintImage(imgNumber) {
  //paintImage함수 안에 새로운 object를 만들거임
  const image = new Image();
  image.src = `image/${imgNumber + 1}.jpg`;
  //+1하는 이유는 Math.random()에서 0이 나올수도 있기 떄문
  image.classList.add("bgImage");
  body.prepend(image);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();

// 자바스크립트에는 Math수학 모듈이 있음.
// Math
// Math.random()
// Math.random() * 5
// Math.floor(3.9) 결과 3
// Math.ceil(3.9) 결과 4
// Math.floor(Math.random())
