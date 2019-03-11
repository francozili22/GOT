var slideMovement = 0;
makeSlide();

var makeSlide = () => {
  var i;
  var slide = document.getElementsByClassName("Slides");
  var circles = document.getElementsByClassName("circle");
  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";  
  }
  slideMovement++;
  if (slideMovement > slide.length) {slideMovement = 1}    
  for (i = 0; i < circles.length; i++) {
    circles[i].className = circles[i].className.replace(" active", "");
  }
  slide[slideMovement-1].style.display = "block";  
  circles[slideMovement-1].className += " active";
  setTimeout(showSlide, 5000); // Change image every 5seconds
}