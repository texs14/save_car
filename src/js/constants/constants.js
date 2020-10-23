const formFeedback = document.querySelector('.feedback__form');
const errorMassage = document.querySelector('.error-massege');
const errorMassegePhone = document.querySelector('#error-phone');
const errorMassegeEmail = document.querySelector('#error-email');
const labelEmail = document.querySelector('#labelEmail');
const labelPhone = document.querySelector('#labelPhone');
const buttonMenu = document.querySelector('.button-menu');
const menu = document.querySelector('.menu');
const buttonCalcOsago = document.querySelector('.calc__button_osago');
const popupOsago = document.querySelector('.popup-calc');
const popupInfo = document.querySelector('.popup');
const burger = document.querySelector('.ham');

const REG_EXS = {
    email: new RegExp(/^([a-zA-Z\d][-_.]?[a-zA-Z\d]*)+@([A-Za-z\d]+[-_.]?[a-z\d]*)+\.[a-z]{2,}$/),
    phone: new RegExp(/^(\+7|8)\s?(\(9\d{2}\)\s?\d{3}-\d{2}-\d{2}|9\d{9}|9\d{2}-\d{3}-\d{2}-\d{2})$/),
}
const ERRORS_MASSEGE = {
    email: `Не корректный email адресс!`,
    phone: `Не корректный номер телефона`
}



export {
    formFeedback,
    REG_EXS,
    ERRORS_MASSEGE,
    errorMassage,
    errorMassegePhone,
    errorMassegeEmail,
    labelEmail,
    labelPhone,
    buttonMenu,
    menu,
    buttonCalcOsago,
    popupOsago,
    popupInfo,
    burger
    };