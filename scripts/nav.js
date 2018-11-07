// window.addEventListener('scroll', function(){
//     document.getElementById('heroArea').style.background = "red"
// })

// trying to accomplish changing bacgrkound slightly more and more when scrolling down 
// the page

// using this to accomplish shrinking the 3 web pages into a mini img in top left
// corner of screen to use it as a nav bar.

// [ about ] [[ home ]] [ projects ]

var nav = document.getElementById('nav');
var navBox = document.getElementById('navBox');

var aboutLink = document.getElementById('aboutLink');
var homeLink = document.getElementById('homeLink');
var projectLink = document.getElementById('projectLink');

var links = document.getElementsByClassName('links')

nav.addEventListener('mouseover', navGrow);
navBox.addEventListener('mouseover', navGrow);
aboutLink.addEventListener('mouseover', navGrow);
homeLink.addEventListener('mouseover', navGrow);
projectLink.addEventListener('mouseover', navGrow);



nav.addEventListener('mouseoout', navShrink);
navBox.addEventListener('mouseout', navShrink);
homeLink.addEventListener('mouseover', navShrink);
aboutLink.addEventListener('mouseover', navGrow);
projectLink.addEventListener('mouseover', navShrink);

var body = document.getElementsByTagName('body');

document.onmouseover = function(e) {
    console.log(e.target);
    if(e.target == body) {
        navShrink()
    }
}



function navGrow() {
    navBox.style.transform = "scaleX(5) scaleY(1.5)"
    nav.classList.add("navShow")
    navBox.style.backgroundImage = "none"
}

function navShrink() {
    navBox.style.transform = "none"
    nav.classList.remove("navShow")
    navBox.style.backgroundImage = "url('images/rightIcon.png')"
}