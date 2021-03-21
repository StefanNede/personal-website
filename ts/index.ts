const hamburger:any = document.querySelector(".hamburger");
const hamburger_lines:any = document.querySelectorAll(".hl");
const nav:any = document.querySelector(".main_nav");
const content:any = document.querySelector(".rest_of_page");


hamburger.addEventListener("click", ()=>{
    hamburger_lines[1].classList.toggle("clicked");
    hamburger_lines[3].classList.toggle("clicked");
    hamburger_lines[0].classList.toggle("dissapear");
    hamburger_lines[2].classList.toggle("dissapear");
    content.classList.toggle("nav_open");
    nav.classList.toggle("clear");
});
