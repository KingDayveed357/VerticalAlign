let search = document.getElementById('search');
let searchdiv = document.getElementById('searchdiv');
let closeBtn =  document.getElementById('closeBtn');
search.addEventListener('click', function(e){
    e.preventDefault();

    document.getElementById("closeBtn").style.display = "flex";
    document.getElementById("search").style.display = "none";  

    
closeBtn.addEventListener('click', function(e){
    e.preventDefault();
    div.remove();

})
if (closeBtn.addEventListener('click', function(e){
    e.preventDefault();
    div.remove();
    document.getElementById("closeBtn").style.display = "none"; 
    document.getElementById("search").style.display = "flex";
   search.style.marginTop = "24px";
})) {
}

let div = document.createElement("div");
let input = document.createElement("input");
let icon = document.createElement("i");
searchdiv.appendChild(div);
div.appendChild(input);
div.appendChild(icon);

div.style.width = "100";
div.style.padding = "20px";
div.style.backgroundColor ='#212331';
input.style.width = "100";
input.style.backgroundColor = "#393D4F";  
input.style.display = "flex"
input.style.outlineStyle = "none";
input.style.padding = "10px 30px"; 
input.placeholder = `Search `;
input.style.color = `white `;

})

let menu = document.getElementById("menu");
let nav = document.getElementById("nav");
let closeMenu = document.getElementById('closeMenu')
menu.addEventListener('click', function(e){
e.preventDefault();
document.getElementById("closeMenu").style.display = "flex";
document.getElementById("menu").style.display = "none";  
document.getElementById("nav").style.display = "block"; 

if (nav.style.display === "block"){
closeMenu.addEventListener('click', function(e){
e.preventDefault();
nav.style.display = "none";
document.getElementById("closeMenu").style.display = "none"; 
document.getElementById("menu").style.display = "flex";
}) 
}else{
menu.addEventListener('click', function(e){
    e.preventDefault();
    document.getElementById("nav").style.display = "block";
    document.getElementById("menu").style.display = "flex";
}) 
}
})


let slideIndex = 1; 
showSlides(slideIndex);
showSliders();

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";

// setTimeout(showSlides, 5000); 
}
function showSliders() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSliders, 5000); 
}


let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
}


