"use strict";
const hamburger = document.querySelector(".hamburger");
const hamburger_lines = document.querySelectorAll(".hl");
const nav = document.querySelector(".main_nav");
const customCursor = document.querySelector(".circle");
nav.style.backgroundColor = "#81b58e";
document.addEventListener("mousemove", function (event) {
    const customCursorPositions = customCursor === null || customCursor === void 0 ? void 0 : customCursor.getBoundingClientRect();
    let cursorHeight = (customCursorPositions.height);
    let cursorWidth = (customCursorPositions.width);
    let xpos = ((event.pageX - cursorWidth / 2)).toString();
    let ypos = ((event.pageY - cursorHeight / 2)).toString();
    customCursor.style.marginLeft = xpos + 'px';
    customCursor.style.marginTop = ypos + 'px';
});
hamburger.addEventListener("click", () => {
    hamburger_lines[1].classList.toggle("clicked");
    hamburger_lines[3].classList.toggle("clicked");
    hamburger_lines[0].classList.toggle("dissapear");
    hamburger_lines[2].classList.toggle("dissapear");
    nav.classList.toggle("clear");
});
