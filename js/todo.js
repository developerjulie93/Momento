const formTodo = document.querySelector("#jsTodo"),
        inputTodo = formTodo.querySelector("input");
const ul = document.querySelector("#todo");

function makeTodoList(e){
    e.preventDefault();
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = inputTodo.value;
    li.append(span);
    ul.appendChild(li);
    inputTodo.value = null;
}
function init(){
    formTodo.addEventListener("submit", makeTodoList);
}
init();