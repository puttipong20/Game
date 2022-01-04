const pop = document.querySelector("#click");
const press = document.querySelector("#popCat")

const openImage = "./picture/Ima.jpg";
const closeImage = "./picture/Ima(1).jpg";

const music = new Audio ('./sound/music.wav');

// touch desktop

press.addEventListener("mousedown",openMount);
press.addEventListener("mouseup",closeMount);

// touch screen
press.addEventListener("touchstart",function(e){
    e.preventDefault();
    openMount();
})
press.addEventListener("touchend",function(e){
    e.preventDefault();
    closeMount();
})

function openMount(){
    pop.src = openImage;
    music.play();
}
function closeMount(){
    pop.src = closeImage;
}