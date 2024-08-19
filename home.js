// document.addEventListener('DOMContentLoaded', function () {
//     const menuToggle = document.querySelector('.menu-toggle');
//     const links = document.querySelector('.links');
  
//     menuToggle.addEventListener('click', function () {
//       links.classList.toggle('active');
//     });
//   });
  
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("carousel-slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4000);
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}
