import './index.css';
import './index.scss';


import './vendor/mySwiper';
import Form from './js/components/Form';


import {formFeedback, ERRORS_MASSEGE, REG_EXS, menu, burger} from './js/constants/constants';


const form = new Form(formFeedback, ERRORS_MASSEGE, REG_EXS);
console.log('1')
let menuOpen = false;
console.log('2')

form.send();
console.log('13')
form.requireInput();
console.log('14')

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

console.log('15')

document.addEventListener('scroll', () => {
    menu.classList.remove('menu__open');
    burger.classList.remove('active');
});
console.log('156')