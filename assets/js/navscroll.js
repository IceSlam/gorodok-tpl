(function() {
    'use strict';

    var goTopBtn = document.querySelector('.is-navbar');
    function trackScroll() {
        let scrolled = window.pageYOffset;
        let coords = document.documentElement.clientHeight;

        if (scrolled > coords) {
            goTopBtn.classList.add('thin');
        }
        if (scrolled < coords) {
            goTopBtn.classList.remove('thin');
        }
    }

    function backToTop() {
        if (window.pageYOffset > 30) {
            window.scrollBy(0, -40);
            setTimeout(backToTop, 0);
        }
    }
    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);
})();