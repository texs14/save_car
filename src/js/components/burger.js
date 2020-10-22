import { burger } from '../constants/constants';

document.addEventListener('click', () => {
    burger.classList.toggle('active');
    console.log('click');
});