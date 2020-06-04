import Swiper from '../../node_modules/swiper/js/swiper';

export var mySwiper = new Swiper('.swiper-container', {
    speed: 800,
    spaceBetween: 100,
    grabCursor: true,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
    },
    autoplay: {
        delay: 5000,
    },
});

// export var mySwiper = new Swiper('.swiper-container', {
//     // Optional parameters
//     direction: 'horizontal',
//     loop: true,
//     slidesPerView: 1,
//     spaceBetween: 30,
//     freeMode: false,
    
//     // If we need pagination
//     pagination: {
//         el: '.swiper-pagination',
//     },
//     breakpoints: {
//         310: {
//             loop: false,
//             slidesPerView: 1,
//             spaceBetween: 8,
//             freeMode: true,
//         },

//         650: {
//             loop: false,
//             slidesPerView: 2,
//             spaceBetween: 8,
//             freeMode: false,
//         },

//         1200: {
//             loop: true,
//             slidesPerView: 3,
//             spaceBetween: 30,
//             freeMode: false,
//         }


//     },
//     grabCursor: true,
    

//     // Navigation arrows
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },

// })