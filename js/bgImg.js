const body = document.querySelector("body");

const NumbOfImg = 3;

function makeBgImg(randomNumber){
    const img = new Image();
    img.src = `img/${randomNumber+1}.jpg`;
    img.classList.add("bgImg");
    body.prepend(img);
}
function genNumber(){
    const number = Math.floor(Math.random() * NumbOfImg);
    return number;
}
function init(){   
    const randomNumber = genNumber();
    makeBgImg(randomNumber);
}
init();