const form = document.querySelector(".form"),
    input = form.querySelector("input"),
    name = document.querySelector(".name");

const USER = "User";
const SHOWING = "showing";

function handleSubmit(e){
    e.preventDefault();
}
function loadName(){
    const user = localStorage.getItem(USER);
    if(user === null){
        form.classList.add(SHOWING);
        handleSubmit(e);
    }else{
        form.classList.remove(SHOWING);
        name.classList.add(SHOWING);
        name.innerText = `Hello, ${user}`;
    }
}
function init(){
    loadName();
}

init();