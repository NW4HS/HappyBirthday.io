document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper', {
        effect: 'cards',
        cardeffect: {
            perSlideRotate: 5,
            rotate: true,
            slideShadows: true,
        },
        speed: 400,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
            waitForTransition: true,
            pauseOnMouseEnter: true,
        },
        direction: 'horizontal',
        loop: false,
        pagination: {
            el: '.swiper-pagination',
        },
        autoplay: {
            delay: 2000
        }
    });
});
