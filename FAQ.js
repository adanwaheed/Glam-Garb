document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        item.addEventListener('click', function() {
            const answer = this.querySelector('.answer');
            const isActive = answer.classList.toggle('expand');

            if (isActive) {                
                answer.style.maxHeight = answer.scrollHeight + 'px';
            } else {
                answer.style.maxHeight = 0;
            }
            this.classList.toggle('rotate');
        });
    });
});
