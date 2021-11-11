const toDoList = [];

const form = document.querySelector("form");
const ul = document.querySelector("ul");
const listItems = document.getElementsByClassName("task");
const input = document.querySelector(".text");
const checkbox = document.querySelector(".checkbox");
const taskNumber = document.querySelector(".number");

const removeTask = (e) => {
  e.target.parentNode.remove();
  const index = e.target.parentNode.dataset.key;
  toDoList.splice(index, 1);
  taskNumber.textContent = listItems.length;
  renderList();
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
  liItems = document.querySelectorAll("li.task").length;
  taskNumber.textContent = listItems.length;
  task.querySelector("img").addEventListener("click", removeTask);
};

const renderList = () => {
  ul.textContent = "";
  toDoList.forEach((toDoElement, key) => {
    toDoElement.dataset.key = key;
    ul.appendChild(toDoElement);
  });
};

form.addEventListener("submit", addTask);
