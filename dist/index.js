"use strict";
const hamburger = document.querySelector(".hamburger");
const hamburger_lines = document.querySelectorAll(".hl");
const nav = document.querySelector(".main_nav");
const content = document.querySelector(".rest_of_page");
const scrollDown = document.querySelector(".scroll-down");
const aboutMeContent = document.querySelector(".appear-further-down");
const customCursor = document.querySelector(".circle");
// back to top button coding
const backToTopButton = document.querySelector(".back-to-top");
backToTopButton === null || backToTopButton === void 0 ? void 0 : backToTopButton.addEventListener("click", () => {
    window.scrollTo(0, 0);
});
// this gets the coordinates of the about me content for the smooth scrolling button
// you can use top, bottom, left, and right
const positions = aboutMeContent === null || aboutMeContent === void 0 ? void 0 : aboutMeContent.getBoundingClientRect();
const hello = "hello";
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
    content === null || content === void 0 ? void 0 : content.classList.toggle("nav_open");
    nav.classList.toggle("clear");
});
// scroll to the top of the about me content
scrollDown === null || scrollDown === void 0 ? void 0 : scrollDown.addEventListener("click", () => {
    window.scrollTo(0, positions.top);
});
