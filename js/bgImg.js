const body = document.querySelector("body");

const numOfImg = 3;
function makeBg(){
    const img  = new Image();
    const num = Math.floor(Math.random()*numOfImg)+1;
    img.src = `img/${num}.webp`;
    img.classList.add("bgImg");
    body.prepend(img);
}
function init(){
    makeBg();
}
init();
