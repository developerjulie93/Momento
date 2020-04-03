const formTodo = document.querySelector("#jsTodo"),
  inputTodo = formTodo.querySelector("input");
const ul = document.querySelector("#todo");

function onRemove(e) {
  const target = e.target;
  target.parentNode.removeChild(target);
}
function makeTodoList(e) {
  e.preventDefault();
  const li = document.createElement("li");
  li.innerText = inputTodo.value;
  ul.appendChild(li);
  inputTodo.value = null;
  li.addEventListener("click", onRemove);
}
function init() {
  formTodo.addEventListener("submit", makeTodoList);
}
init();
