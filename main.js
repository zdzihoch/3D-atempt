var canvas = document.getElementsByTagName("canvas")[0];
var menuBox = document.getElementById('menuBox');
var buttonMain = document.getElementById('buttonMain');
var buttonSettings = document.getElementById('buttonSettings');
var buttonAccount = document.getElementById('buttonAccount');
var divMenuMain = document.getElementById('divMenuMain');
var divMenuSettings = document.getElementById('divMenuSettings');
var divMenuAccount = document.getElementById('divMenuAccount');
var c = canvas.getContext("2d");
var canvasMargin = 20;
let openMenu = 1;

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

function activeButton(button) {
    var possibleButtons = [
        buttonMain,
        buttonSettings,
        buttonAccount
    ];
    var possibleDivs = [
        divMenuMain,
        divMenuSettings,
        divMenuAccount
    ];
    console.log(possibleButtons);
    for(let i = 0; i < possibleButtons.length; i++) {
        if(button === possibleButtons[i]) {
            possibleButtons[i].classList.add('buttonMenuActive');
            possibleDivs[i].style.height ="";
        } else {
            possibleButtons[i].classList.remove('buttonMenuActive');
            possibleDivs[i].style.height ="0";
        }
    }
}
window.addEventListener("resize", updateSize);

window.addEventListener("mousemove", checkMousePos);

buttonMain.addEventListener("click", ()=>{ activeButton(buttonMain); });
buttonSettings.addEventListener("click", ()=>{ activeButton(buttonSettings); });
buttonAccount.addEventListener("click", ()=>{ activeButton(buttonAccount); });
updateSize();