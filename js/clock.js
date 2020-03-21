//https://www.notion.so/VanillaJS-Challenge-Program-866b5521d26c46d59e2fec585dec131c
const clockContainer = document.querySelector(".clock"),
    clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    clockTitle.innerText = 
    `${hours <10 ? `0${hours}` : hours} : ${minutes < 10 ? `0${minutes}` : minutes} : ${seconds < 10 ? `0${seconds}` : seconds}`;
};
function init(){
    getTime();
    setInterval(getTime, 1000);
};

init();