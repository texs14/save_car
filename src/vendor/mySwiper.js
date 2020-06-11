import Swiper from '../../node_modules/swiper/js/swiper';

var mySwiper = new Swiper('.swiper-container', {
    speed: 800,
    spaceBetween: 100,
    grabCursor: true,
    loop: true,
    slidesPerView: 3,
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
    },
    autoplay: {
        delay: 3000,
    },
    longSwipesMs: 1110,
    breakpoints: {
        310: {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 8,
            freeMode: true,
        },

        650: {
            loop: true,
            slidesPerView: 2,
            spaceBetween: 8,
            freeMode: false,
        },

        768: {
            loop: true,
            slidesPerView: 3,
            spaceBetween: 30,
            freeMode: false,
        }


    },
});

var mySwiperTwo = new Swiper('.swiper-partners', {
    speed: 2500,
    autoplay: {
        delay: 10,
    },
    breakpoints: {
        310: {
            loop: true,
            slidesPerView: 3,
            spaceBetween: 25,
            freeMode: true,
        },

        510: {
            spaceBetween: 40,
            grabCursor: true,
            loop: true,
            slidesPerView: 3,
        },
    },
});

export {mySwiper, mySwiperTwo};