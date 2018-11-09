<<<<<<< HEAD
var aboutLink = document.getElementById('aboutLink');
var homeLink = document.getElementById('homeLink');
var projectLink = document.getElementById('projectLink');

var aboutPage = document.getElementById('about');
var homePage = document.getElementById('heroArea');
var projectPage = document.getElementById('projectSection');



homeLink.addEventListener('click', function(){
    homePage.scrollIntoView({behavior: 'smooth'})
})

aboutLink.addEventListener('click', function(){
    aboutPage.scrollIntoView({behavior: 'smooth'});
})

projectLink.addEventListener('click', function(){
    projectPage.scrollIntoView({behavior: 'smooth'});
})


var downArrow = document.getElementById('downIcon')

downArrow.addEventListener('click', function(){
    aboutPage.scrollIntoView({behavior: 'smooth'});
})
=======
function scrolling() {
    window.scrollTo('#projectSection')
}
>>>>>>> master
