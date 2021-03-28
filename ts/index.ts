const hamburger:HTMLElement|null = document.querySelector(".hamburger");
const hamburger_lines:Array<HTMLElement>|null = document.querySelectorAll(".hl");
const nav:HTMLElement|null = document.querySelector(".main_nav");
const content:HTMLElement|null = document.querySelector(".rest_of_page");
const scrollDown:HTMLButtonElement|null = document.querySelector(".scroll-down");
const aboutMeContent:HTMLElement|null = document.querySelector(".appear-further-down");
const customCursor:HTMLSpanElement|null = document.querySelector(".circle");

// back to top button coding
const backToTopButton:HTMLButtonElement|null = document.querySelector(".back-to-top");

backToTopButton?.addEventListener("click", ()=>{
    window.scrollTo(0, 0);
});

// this gets the coordinates of the about me content for the smooth scrolling button
// you can use top, bottom, left, and right
const positions = aboutMeContent?.getBoundingClientRect();

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
    content?.classList.toggle("nav_open");
    nav.classList.toggle("clear");
});

// scroll to the top of the about me content
scrollDown?.addEventListener("click", ()=>{
    window.scrollTo(0, positions.bottom);
});
