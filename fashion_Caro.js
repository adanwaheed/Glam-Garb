const images = document.querySelectorAll('.left-caro img');
const texts = document.querySelectorAll('.right-caro p');
let currentIndex = 0;

function showNext() {
    images[currentIndex].style.transition = 'opacity 1s, transform 1s';
    texts[currentIndex].style.transition = 'opacity 1s, transform 1s';
    images[currentIndex].style.opacity = 0;
    texts[currentIndex].style.opacity = 0;
    images[currentIndex].style.transform = 'translateX(-100px)';
    texts[currentIndex].style.transform = 'translateX(100px)';
    setTimeout(() => {
        images[currentIndex].style.display = 'none';
        texts[currentIndex].style.display = 'none';

        currentIndex = (currentIndex + 1) % images.length;

        images[currentIndex].style.display = 'block';
        texts[currentIndex].style.display = 'block';
        setTimeout(() => {
            images[currentIndex].style.transition = 'opacity 1s, transform 1s';
            texts[currentIndex].style.transition = 'opacity 1s, transform 1s';
            images[currentIndex].style.opacity = 1;
            texts[currentIndex].style.opacity = 1;
            images[currentIndex].style.transform = 'translateX(0)';
            texts[currentIndex].style.transform = 'translateX(0)';
        }, 20);
    }, 1000);
}

setInterval(showNext, 5000);