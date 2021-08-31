$(document).ready(function(){
    document.querySelectorAll('a[href^="#"').forEach(link => {

        link.addEventListener('click', function(e) {
            e.preventDefault();

            let href = this.getAttribute('href').substring(1);

            const scrollTarget = document.getElementById(href);

            const topOffset = document.querySelector('.scrollto').offsetHeight;
            // const topOffset = 0; // если не нужен отступ сверху 
            const elementPosition = scrollTarget.getBoundingClientRect().top;
            const offsetPosition = elementPosition - topOffset;

            window.scrollBy({
                top: offsetPosition-70,
                behavior: 'smooth'
            });
        });
    });

    $(window).on("scroll", function () {
            var scrolled = $(this).scrollTop();
            if( scrolled > 107 ) {
                $('header').addClass('scrolled');
            }   
            if( scrolled <= 107 ) {     
                $('header').removeClass('scrolled');
            }
        });
    });