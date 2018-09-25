// grabbing the elements

const navButt = document.getElementById("navButt");
const git1 = document.getElementById("git1");
const git2 = document.getElementById("git2");
const git3 = document.getElementById("git3");
const git4 = document.getElementById("git4");
const arcBG = document.getElementById("arcadia-bg");
const p1 = document.querySelector(".p1");
const p2 = document.querySelector(".p2");
const p3 = document.querySelector(".p3");



// fire when screen size is above 813px
if (document.documentElement.clientWidth > 813) {
    git1.addEventListener("mouseenter", function() {   
        arcBG.style.backgroundImage = "url('/img/arc-code.png')";
        arcBG.style.color = "#FFF";
        //   // reset the color after a short delay
        //   setTimeout(function() {
        //     arcBG.style.color = "";
        //   }, 500);
        }, false);
        git1.addEventListener("mouseleave", function(){
            arcBG.style.backgroundImage = "url('/img/work.jpg')";  
            arcBG.style.color = "black";  
        })
        
        //SECOND PROJECT BUTTON
        git2.addEventListener("mouseenter", function() {  
            p1.classList.remove('p1'); 
            p1.classList.add('codeBackground');
        }, false);
        git2.addEventListener("mouseleave", function(){
            p1.classList.remove('codeBackground');   
            p1.classList.add('p1'); 
        })
        
        //THIRD PROJECT BUTTON
        git3.addEventListener("mouseenter", function() {   
            p2.style.backgroundImage = "url('/img/arc-code.png')";
            p2.style.color = "#FFF";
        }, false);
        git3.addEventListener("mouseleave", function(){
            p2.style.backgroundImage = "url('https://i.imgur.com/2HZCGsX.jpg')";  
            p2.style.color = "white";  
        })
}
// fire when below 930
else {
    console.log('Smaller!');
}


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