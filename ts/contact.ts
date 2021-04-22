const hamburger:HTMLElement = document.querySelector(".hamburger");
const hamburger_lines:Array<HTMLElement> = document.querySelectorAll(".hl");
const nav:HTMLNavbar = document.querySelector(".main_nav");
const customCursor:HTMLSpanElement|null = document.querySelector(".circle");
nav.style.backgroundColor = "#81b58e";

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
