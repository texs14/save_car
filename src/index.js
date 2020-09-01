import './index.css';
import './index.scss';


import './vendor/mySwiper';
import Form from './js/components/Form';
import PopupCalc from './js/components/PopupCalc';
import PopupService from './js/components/PopupService';


import {formFeedback, ERRORS_MASSEGE, REG_EXS, buttonMenu, menu, buttonCalcOsago, popupOsago, popupInfo} from './js/constants/constants';


const form = new Form(formFeedback, ERRORS_MASSEGE, REG_EXS);
const popupCalc = new PopupCalc(popupOsago);
const popupService = new PopupService(popupInfo);

form.send();
form.requireInput();


buttonCalcOsago.addEventListener('click', e => {
    popupCalc.show();
});

popupOsago.addEventListener('click', e => {
    if(e.target.classList.value === `popup` || `popup__content`) {
        popupCalc.hidden();
    }
});



buttonMenu.addEventListener('click', e => {
    menu.classList.toggle('menu__open');
    buttonMenu.classList.toggle('button-menu__open');
});


const card = document.querySelector('.swiper-wrapper');


card.addEventListener('click', e => {
    if (e.target.type === `submit`) {
        switch (e.target.closest('div').id) {
            case 'serviceCardRestoration' :
                popupService.show();
                break;
            case 'serviceCardSaveAuto' :
                alert(2);
                break;
            case 'serviceCardSaveHouse' :
                alert(3);
                break;
            case '' :
                break;
        }
    }
    // popupService._renderContent(e);
});

popupInfo.addEventListener('click', e => {
    popupService.hidden();
});