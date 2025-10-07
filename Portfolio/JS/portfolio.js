// Open the contact form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

// Close the contact form
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

// Slideshow functionality
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Main slideshow function
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    
    // Loop back to first slide
    if (n > slides.length) {
        slideIndex = 1;
    }
    
    // Loop to last slide
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // Remove active class from all dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    // Display current slide
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}