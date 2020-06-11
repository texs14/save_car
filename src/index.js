import './index.css';
import './index.scss';


import './vendor/mySwiper';

// const form = document.querySelector('.feedback');

// const ajaxSend = (formData) => {
    
//     fetch('../main.php', { // файл-обработчик 
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/x-www-form-urlencoded', // отправляемые данные 
//         },
//         body: formData
//     })
//     .then(response => {
//         console.log('Сообщение отправлено методом fetch');
//     })
//     .catch(error => console.error(error))
// };


// const forms = document.getElementsByTagName('form');

// for (let i = 0; i < forms.length; i++) {
//     forms[i].addEventListener('submit', function (e) {
//         e.preventDefault();
//         const formData = new FormData(form);
//         console.log(formData);
//         for (let key of formData.keys()) {
//             console.log(`${key}: ${formData.get(key)}`);
//         };
//         ajaxSend(formData);
//         this.reset(); // очищаем поля формы 
//     });
// };




    const ajaxSend = (formData) => {
        fetch('../main.php', { // файл-обработчик 
            method: 'POST',
            body: formData
        })
            .then(response => console.log('Сообщение отправлено методом fetch'))
            .catch(error => console.error(error))
    };

    const forms = document.getElementsByTagName('form');
    for (let i = 0; i < forms.length; i++) {
        forms[i].addEventListener('submit', function (e) {
            e.preventDefault();
            const formData = new FormData(this);
            ajaxSend(formData);
            this.reset(); // очищаем поля формы 
        });
    };