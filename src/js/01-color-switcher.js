const bodyRef = document.querySelector("body");
const startBtnRef = document.querySelector("button[data-start]");
const stopBtnRef = document.querySelector("button[data-stop]");
 
startBtnRef.addEventListener('click', onChangeColorStart);
stopBtnRef.addEventListener('click', onChangeColorStop);

let changeColorTimerId = null;

function onChangeColorStart(evt) {
    onBtnDisabled();
    changeColorTimerId = setInterval(() => {
        bodyRef.style.backgroundColor = getRandomHexColor();
    }, 1000);
}

function onChangeColorStop(evt) {
    onBtnDisabled();
    clearTimeout(changeColorTimerId);
}

function onBtnDisabled() {
    if (!startBtnRef.disabled) {
        startBtnRef.disabled = true;
        stopBtnRef.disabled = false;
    } else {
        startBtnRef.disabled = false;
        stopBtnRef.disabled = true;
    }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}