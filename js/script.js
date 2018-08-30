// grabbing the elements

let navButt = document.getElementById("navButt");
let git1 = document.getElementById("git1");
let git2 = document.getElementById("git2");
let git3 = document.getElementById("git3");
let git4 = document.getElementById("git4");
let arcBG = document.getElementById("arcadia-bg");
let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let p3 = document.getElementById("p3");

// let top = document.getElementById('header');

function myFunction(){
    navButt.classList.toggle("testStyle");
}

    




// fire when screen size is above 930px
if (document.documentElement.clientWidth > 930) {
    git1.addEventListener("mouseenter", function() {   
        arcBG.style.backgroundImage = "url('/img/arc-code.png')";
        arcBG.style.color = "#FFF";
        //   // reset the color after a short delay
        //   setTimeout(function() {
        //     arcBG.style.color = "";
        //   }, 500);
        }, false);
        git1.addEventListener("mouseleave", function(){
            arcBG.style.backgroundImage = "url('https://i.imgur.com/2HZCGsX.jpg')";  
            arcBG.style.color = "black";  
        })
        
        //SECOND PROJECT BUTTON
        git2.addEventListener("mouseenter", function() {   
            p1.style.backgroundImage = "url('/img/arc-code.png')";
            p1.style.color = "#FFF";
        }, false);
        git2.addEventListener("mouseleave", function(){
            p1.style.backgroundImage = "url('https://i.imgur.com/2HZCGsX.jpg')";  
            p1.style.color = "white";  
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
        
        
        //FOURTH PROJECT BUTTON
        git4.addEventListener("mouseenter", function() {   
            p3.style.backgroundImage = "url('/img/arc-code.png')";
            p3.style.color = "#FFF";
        }, false);
        git4.addEventListener("mouseleave", codePic)
        
        function codePic(){
            p3.style.backgroundImage = "url('https://i.imgur.com/2HZCGsX.jpg')";  
            p3.style.color = "white"; 
        }
}
// fire when below 930
else {
    console.log('Smaller!');
}




//collapses navbar when clicking on one of it's links

// $('.navbar-nav>li>a').on('click', function(){
//     $('.navbar-collapse').collapse('hide');
// });