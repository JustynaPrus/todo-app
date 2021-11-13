const toDoList = [];

const form = document.querySelector("form");
const ul = document.querySelector("ul");
const listItems = document.getElementsByClassName("task");
const input = document.querySelector(".text");
const checkedList = document.getElementsByClassName("task checked");
let taskNumber = document.querySelector(".number");

const buttonAll = document.getElementById("all");
const buttonActive = document.getElementById("active");
const buttonCompleted = document.getElementById("completed");
const buttonClear = document.getElementById("clear");

const removeTask = (e) => {
  e.target.parentNode.remove();
  const index = e.target.parentNode.dataset.key;
  toDoList.splice(index, 1);
  taskNumber.textContent = listItems.length - checkedList.length;
  renderList();
};

const checkTask = (e) => {
  const a = e.target.parentNode;
  const b = a.parentNode;
  const c = b.parentNode;
  c.classList.toggle("checked");
  taskNumber.textContent = listItems.length - checkedList.length;
};

const addTask = (e) => {
  e.preventDefault();
  const titleTask = input.value;
  if (titleTask === "") return;
  const task = document.createElement("li");
  task.className = "task";
  task.innerHTML =
    `<div><div class="box">
    <input class="checkbox" type="checkbox">
    <span class="checkmark"></span>
    </div><p>${titleTask}</p></div>` + `<img src="/images/icon-cross.svg">`;
  toDoList.push(task);
  renderList();

  ul.appendChild(task);
  input.value = "";
  taskNumber.textContent = listItems.length - checkedList.length;
  task.querySelector("img").addEventListener("click", removeTask);
  task.querySelector("input").addEventListener("click", checkTask);
};

const renderList = () => {
  ul.textContent = "";
  toDoList.forEach((toDoElement, key) => {
    toDoElement.dataset.key = key;
    ul.appendChild(toDoElement);
  });
};

function showAll() {
  [...document.getElementsByClassName("task")].forEach((e) => {
    e.classList.remove("inactive");
    e.classList.add("active");
  });
}

function showActive() {
  [...document.getElementsByClassName("task checked")].forEach((e) => {
    e.classList.remove("active");
    e.classList.add("inactive");
  });
}

function showDone() {
  [...document.getElementsByClassName("task")].forEach((e) => {
    e.classList.remove("active");
    e.classList.remove("inactive");
    if (e.classList != "task checked") {
      e.classList.add("inactive");
    }
  });
}

function removeDone() {
  [...document.getElementsByClassName("task checked")].forEach((e) => {
    e.remove();
    const index = e.dataset.key;
    toDoList.splice(index, 1);
    renderList();
  });
}

form.addEventListener("submit", addTask);

buttonClear.addEventListener("click", removeDone);
buttonCompleted.addEventListener("click", showDone);
buttonActive.addEventListener("click", showActive);
buttonAll.addEventListener("click", showAll);
