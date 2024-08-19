// // script.js

// let index = 0;
// const tailors = document.querySelectorAll('.tailor');
// const totalTailors = tailors.length;

// function nextTailor() {
//     tailors[index].classList.remove('active');
//     index = (index + 1) % totalTailors;
//     tailors[index].classList.add('active');
// }

// function startCarousel() {
//     setInterval(nextTailor, 3000); // Change tailor every 3 seconds
// }

// startCarousel();

// script.js

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });
});

