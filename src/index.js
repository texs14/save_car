import './index.css';
import './index.scss';


import './vendor/mySwiper';
import Form from './js/components/Form';


import {formFeedback, ERRORS_MASSEGE, REG_EXS, menu, burger} from './js/constants/constants';


const form = new Form(formFeedback, ERRORS_MASSEGE, REG_EXS);
let menuOpen = false;

form.send();
form.requireInput();

burger.addEventListener('click', e => {
    if(menuOpen) {
        menu.classList.toggle('menu__open');
    } else {
        menu.classList.toggle('menu__open');
        menu.classList.add('menu__close');
    }
    burger.classList.toggle('active');
    menuOpen = !menuOpen;
});


document.addEventListener('scroll', () => {
    menu.classList.remove('menu__open');
    burger.classList.remove('active');
});
