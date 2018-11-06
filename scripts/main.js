var aboutLink = document.getElementById('aboutLink');
var contactLink = document.getElementById('contactLink');
var projectLink = document.getElementById('projectLink');

var aboutPage = document.getElementById('about');
// var contactPage = document.getElementById('contact');
var projectPage = document.getElementById('projectSection');



aboutLink.addEventListener('click', function(){
    aboutPage.scrollIntoView({behavior: 'smooth'});
})

projectLink.addEventListener('click', function(){
    projectPage.scrollIntoView({behavior: 'smooth'});
})