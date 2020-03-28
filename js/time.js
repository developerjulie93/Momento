const form = document.querySelector("#jsTime"),
    time = form.querySelector("h1");
    
function makeTime(){
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    time.innerText = `${hours<10? '0'+hours : hours} : ${minutes<10? '0'+minutes : minutes}`;
}
function init(){
    makeTime();
    setInterval(makeTime, 1000);
}
init();