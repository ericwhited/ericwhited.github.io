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


// nav pop out 
// var navBox = document.getElementById('navBox');
// var nav = document.getElementById('nav');

// navBox.addEventListener('mouseover', function(){
//     nav.classList.add("navShow")
// });


// navBox.addEventListener('mouseleave', function(){
//     nav.classList.remove('navShow')
// });



// document.onmouseover = function (e) {
//     console.log(e.target);
//     if(e.target !=homeLink || e.target !=projectLink || e.target!=aboutLink || e.target!=navBox || e.target !=nav) {
//         nav.classList.remove('navShow')
//     }
// }