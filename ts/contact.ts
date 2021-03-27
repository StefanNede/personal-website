const hamburger:HTMLElement = document.querySelector(".hamburger");
const hamburger_lines:Array = document.querySelectorAll(".hl");
const nav:HTMLNavbar = document.querySelector(".main_nav");

nav.style.backgroundColor = "#81b58e";

hamburger.addEventListener("click", ()=>{
    hamburger_lines[1].classList.toggle("clicked");
    hamburger_lines[3].classList.toggle("clicked");
    hamburger_lines[0].classList.toggle("dissapear");
    hamburger_lines[2].classList.toggle("dissapear");
    nav.classList.toggle("clear");
});
