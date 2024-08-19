document.addEventListener("DOMContentLoaded", function () {
            const hamburger = document.querySelector('.hamburger');
            const navMobile = document.querySelector('.nav-mobile');

            hamburger.addEventListener('click', function () {
                this.classList.toggle('active');
                navMobile.classList.toggle('active');

                if (navMobile.classList.contains('active')) {
                    navMobile.style.display = 'block';
                    navMobile.style.animation = 'slideDown 0.5s ease forwards';
                } else {
                    navMobile.style.animation = 'slideUp 0.5s ease forwards';
                    setTimeout(() => {
                        navMobile.style.display = 'none';
                    }, 500);
                }
            });

            // window.onclick = function(event) {
            //     if (event.target == ) {
            //         modal.style.display = "none";
            //     }
            // }
        });