const formName = document.querySelector("#jsName"),
  inputName = formName.querySelector("input");
const name = document.querySelector(".userName");

const USER = "User";

function greeting() {
  const date = new Date();
  const hours = date.getHours();
  let greeting = "";
  if (hours < 12) {
    greeting = "Good Morning, ";
  } else if (12 <= hours && hours < 18) {
    greeting = "Good Afternoon, ";
  } else {
    greeting = "Good Night, ";
  }
  return greeting;
}
function setName(e) {
  e.preventDefault();
  localStorage.setItem(USER, inputName.value);
  loadName();
}
function loadName() {
  const userName = localStorage.getItem(USER);
  if (userName !== null) {
    formName.classList.remove("showing");
    name.classList.add("showing");
    const greet = greeting();
    name.innerText = `${greet} ${userName}`;
    console.log(userName);
  } else {
    formName.classList.add("showing");
    formName.addEventListener("submit", setName);
  }
}
function init() {
  loadName();
}
init();
