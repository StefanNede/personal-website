"use strict";
const hamburger = document.querySelector(".hamburger");
const hamburger_lines = document.querySelectorAll(".hl");
const nav = document.querySelector(".main_nav");
const customCursor = document.querySelector(".circle");
const toProjectButtons = document.querySelectorAll(".link");
const projects = document.querySelectorAll(".project");
/*
buttons:
 0 - colour generator
 1 - quiz web app
 2 - to do list app
 3 - notes app
 4 - calculator gui in python
 5 - hangman in c++
 6 - space shooting game in python
 */
toProjectButtons.forEach((toProjectButton, index) => toProjectButton.addEventListener("click", () => {
    const position = projects[index].getBoundingClientRect();
    window.scrollTo(0, position.top);
}));
;
nav.style.backgroundColor = "#c19393";
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
