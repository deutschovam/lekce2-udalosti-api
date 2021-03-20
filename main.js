// tady je místo pro náš program

let nadpis = document.querySelector("h1");
nadpis.classList.add("zluty");

nadpis.classList.remove("zluty");


function lev() {
   document.querySelector("p").style.fontWeight = "bold";
}
function zpet() {
    document.querySelector("p").style.fontWeight = "normal";
}

function red() {
    document.querySelector("p").classList.toggle("red");
}

/*function zvetsit() {
    document.querySelector("p").style.fontSize = bigger;
}

function bigger(x, base) {
    const parsed = parseInt(x, base);
    if (isNaN(parsed)) { return 16; }
    return parsed + 1 "px";
  }
*/

/** 
 * 
 * @param {string} elementSelector
*/

function prehraj(elementSelector) {
    let audioElement = document.querySelector(elementSelector);
    audioElement.play();
}

function zastav(elementSelector) {
    let audioElement = document.querySelector(elementSelector);
    audioElement.pause();
}
function nula(elementSelector) {
    let audioElement = document.querySelector(elementSelector);
    audioElement.volume = 0;
}
function pul(elementSelector) {
    let audioElement = document.querySelector(elementSelector);
    audioElement.volume = 0.5;
}
function jedna(elementSelector) {
    let audioElement = document.querySelector(elementSelector);
    audioElement.volume = 1;
}
function zacatek(elementSelector) {
    let audioElement = document.querySelector(elementSelector);
    audioElement.currentTime = 0;
}


