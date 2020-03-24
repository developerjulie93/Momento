const todoForm = document.querySelector(".todoForm"),
    todoInput = todoForm.querySelector("input"),
    todoList = document.querySelector(".todoList");

let toDos = [];
const TODOS = "Todos";

function deleteTodo(e){
    const li = e.target.parentNode;
    todoList.removeChild(li);
    const cleanTodos = toDos.filter(function (todo){
        if(todo.id !== parseInt(li.id)){
            return todo;
        };
    });
    toDos = cleanTodos;
    saveTodo(toDos);
}
function saveTodo(toDos){
    localStorage.setItem("TODOS", JSON.stringify(toDos));
}

function makeTodo(todo){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length+1;
    delBtn.addEventListener("click", deleteTodo);
    span.innerText = todo;
    delBtn.innerText = "Del";
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    todoList.appendChild(li);
    const toDoObj = {
        id: newId,
        text: todo,
    };
    toDos.push(toDoObj);
    saveTodo(toDos);
}

function handleSubmit(e){
    e.preventDefault();
    makeTodo(todoInput.value);
    todoInput.value = "";
}

function loadTodo(){
    const loadTodos = localStorage.getItem("TODOS");
    if(loadTodos !== null){
        const parsedTodos = JSON.parse(loadTodos);
        parsedTodos.forEach(function(toDos){
            makeTodo(toDos.text);
        });
    }
}
function init(){
    loadTodo();
    todoForm.addEventListener("submit", handleSubmit);
}
init();