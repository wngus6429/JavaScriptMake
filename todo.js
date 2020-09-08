/** @format */

const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

function filterFn(toDo) {
  //이 filter가 하는 것은 array를 만들것임.
  return toDo.id === 1;
}

//연결1
let toDos = []; //해야할 일을 생성했을 때 그게 이 toDos array에 추가되게 하기

//다음 강의
function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  //이 부분으로 인해 이모티콘 누르면 삭제가 가능해진다.
  //하지만 새로고침하면 그대로 있음. 그래서 수정해야함.
  const cleanToDos = toDos.filter(function (toDo) {
    console.log(toDo);
    return toDo.id !== parseInt(li.id);
  }); //필터는 함수 하나를 실행 시킬것임.
  console.log(cleanToDos);
  toDos = cleanToDos;
  saveToDos();
}

function saveToDos() {
  //연결2
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
  const li = document.createElement("li"); //엘리멘트 생성
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  delBtn.innerHTML = "🐱";
  delBtn.addEventListener("click", deleteToDo);
  span.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newId;
  console.log(li);
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId,
  };
  toDos.push(toDoObj);
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}
function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    //toDos를 불러오는 작업
    //console.log(loadedToDos);
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function (toDo) {
      paintToDo(toDo.text);
    });
    // forEach는 기본적으로 함수를 실행하는데.
    // arrray에 담겨있는 것들 각각에 한번씩 함수를 실행시켜줌
    //console.log(parsedToDos);
  }
}
function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}
init();

//filter와 forEach를 잘 기억해야함.
