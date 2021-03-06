// grabbing the elements

const git2 = document.getElementById("git2");
const p1 = document.querySelector(".p1");
const p2 = document.querySelector(".p2");
const p3 = document.querySelector(".p3");
const body = document.querySelector("body");
const greet = document.querySelector('.greet');
const scText = document.querySelector('.sc-text');

    //SECOND PROJECT BUTTON
    git2.addEventListener("mouseenter", function() {        
        p1.classList.add('codeBackground');
    }, false);
    git2.addEventListener("mouseleave", function(){
        p1.classList.remove('codeBackground');   
    })
    

//preloader

window.addEventListener("load", function(){
    body.style.display = "block";
    changeMessage();
    setTimeout(() => {
        body.style.opacity = '1';
    }, 700);
    
})

// Greeting message change based on time of day
time = new Date().getHours();
function changeMessage(){
    if(time < 7 ){
        greet.innerHTML = 'Oh, Hello Early Bird!'
    } else if (time >=7 && time < 12){
        greet.innerHTML = 'Oh, Good Morning!'
    } else if (time >= 12 && time < 18){
        greet.innerHTML = 'Oh, Good Afternoon!'
    } else if(time >= 18){
        greet.innerHTML = 'Oh, Good Evening!'
    }
}

// links open in new tab

function externalLinks() {   
    for(var c = document.getElementsByTagName("a"), a = 0;a < c.length;a++) { 
        var b = c[a];
        b.getAttribute("href") && b.hostname !== location.hostname && (b.target = "_blank")   
    } 
};
externalLinks(); 



// fade up animation
// let slider = document.querySelector('.slider');
// let processCont = document.querySelector('.process');

// window.addEventListener('scroll', function(e){
//   if (isScrolledIntoView(slider)){
//     classRemove(slider);
//   }
//   if (isScrolledIntoView(processCont)){
//     classRemove(processCont);
//   }
// },false);

// function classRemove(element){
//   setTimeout(() => {
//     element.classList.remove('fade-up');
//   }, 400);
// }


// function isScrolledIntoView(el) {
//   var rect = el.getBoundingClientRect();
//   var elemTop = rect.top;
//   var elemBottom = rect.bottom;

//   // Only completely visible elements return true:
//   // var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
//   // Partially visible elements return true:
//   let isVisible = elemTop < window.innerHeight && elemBottom >= 0;
//   return isVisible;
// }




//collapses navbar when clicking on one of it's links

// $('.navbar-nav>li>a').on('click', function(){
//     $('.navbar-collapse').collapse('hide');
// });