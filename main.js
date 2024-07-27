var canvas = document.getElementsByTagName("canvas")[0];
var menuBox = document.getElementById('menuBox');
var c = canvas.getContext("2d");
var canvasMargin = 20;
let openMenu = 0;

function updateSize(){
    if(document.body.clientHeight < document.body.clientWidth){
        canvas.height = document.body.clientHeight - canvasMargin;
        canvas.width = ((canvas.height / 9)*16 )- canvasMargin;
    }else{
        canvas.width = document.body.clientWidth - canvasMargin;
        canvas.height = ((canvas.width /16)*9 )- canvasMargin;
    }
};
function checkMousePos(){
    console.log(event.clientX);
    console.log(document.body.clientWidth);
    console.log(menuBox.offsetWidth);
    console.log(document.body.clientWidth - menuBox.offsetWidth - 10);
    console.log("====");
    if(event.clientX > document.body.clientWidth - 10 && openMenu == 0){
        menuBox.classList.remove("closed");
        menuBox.classList.add("open");
        openMenu = 1;
    }
    if(event.clientX < document.body.clientWidth - menuBox.offsetWidth - 10 && openMenu == 1){
        menuBox.classList.remove("open");
        menuBox.classList.add("closed");
        openMenu = 0;
    }
}
window.addEventListener("resize",updateSize);

window.addEventListener("mousemove",checkMousePos);

updateSize();