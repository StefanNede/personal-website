const hamburger:HTMLElement = document.querySelector(".hamburger");
const hamburger_lines:Array<HTMLElement> = document.querySelectorAll(".hl");
const nav:HTMLNavbar = document.querySelector(".main_nav");
const customCursor:HTMLSpanElement|null = document.querySelector(".circle");
const toProjectButtons:Array<HTMLButtonElement> = document.querySelectorAll(".link");
const projects: Array<HTMLElement> = document.querySelectorAll(".project");

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

toProjectButtons.forEach((toProjectButton, index)=>
    toProjectButton.addEventListener("click", () => {
        const position = projects[index].getBoundingClientRect();
        window.scrollTo(0, position.top);
    });
);

nav.style.backgroundColor = "#c19393";

document.addEventListener("mousemove", function(event){
    const customCursorPositions:Object = customCursor?.getBoundingClientRect();
    let cursorHeight:number = (customCursorPositions.height);
    let cursorWidth:number = (customCursorPositions.width);
    let xpos:string = ((event.pageX - cursorWidth/2)).toString();
    let ypos:string = ((event.pageY- cursorHeight/2)).toString();
    customCursor.style.marginLeft = xpos+'px';
    customCursor.style.marginTop = ypos+'px';
})


hamburger.addEventListener("click", ()=>{
    hamburger_lines[1].classList.toggle("clicked");
    hamburger_lines[3].classList.toggle("clicked");
    hamburger_lines[0].classList.toggle("dissapear");
    hamburger_lines[2].classList.toggle("dissapear");
    nav.classList.toggle("clear");
});
