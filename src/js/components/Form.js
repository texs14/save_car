import {errorMassegeEmail, errorMassegePhone, labelEmail, labelPhone} from '../constants/constants';

export default class Form {
    constructor(form, ERRORS_MASSEGE, REG_EXS) {
        this._form = form;
        this._errors = ERRORS_MASSEGE;
        this.i = 0;
        this.valid = false;
        this._regExs = REG_EXS;
        this.call = false;
    }

    send() {

        this._form.addEventListener('submit', e => {
            e.preventDefault();
            if(this._validation()){
                fetch('../mail.php', {
                    method: 'POST',
                    body:  new FormData(this._form)
                })
                .then(res => console.log('Сообщение отправлено'))
                .catch(err => console.log(err));
                this._form.reset();
            }
        });
    }                


    _validation() {
        if(this._checkBox()) {
            this._inputsResetError();
            return this._checkValidPhone();
        } else {
            this._inputsResetError();
            return this._checkValidEmail();
        }
        
    }

    _inputsResetError() {
        this._form.phone.style.borderColor = `rgb(209, 209, 209)`;
        errorMassegePhone.textContent = ``;
        errorMassegePhone.style.display = `none`;

        this._form.email.style.borderColor = `rgb(209, 209, 209)`;
        errorMassegeEmail.style.display = `none`;
        errorMassegeEmail.textContent = ``;
    }

    requireInput() {
        this._form.call.addEventListener('input', e => {
            if(this._form.call.checked) {
                labelEmail.classList.remove('require');
                labelPhone.classList.add('require');
            }  else {
                labelPhone.classList.remove('require');
                labelEmail.classList.add('require');
            }

        });
    }


    _checkValidEmail() {
        
        for(const input of this._form) {
            if(input.type === `email`) {
                errorMassegeEmail.textContent = this._errors.email;
                errorMassegeEmail.style.display = `block`;
                input.style.borderColor = `rgba(255, 0, 0, 0.808)`;
                return this._regExs.email.test(input.value);
            } else {
                this._inputResetError(input, errorMassegeEmail);
                return this._regExs.email.test(input.value);

            }
        }
    }

    _checkValidPhone() {
        
        for(const input of this._form) {
            if(input.type === `tel`) {
                if(this._regExs.phone.test(input.value)) {
                    
                    this._inputResetError(input, errorMassegePhone);
                    return this._regExs.phone.test(input.value);
                    
                } else {
                    errorMassegePhone.textContent = this._errors.phone;
                    errorMassegePhone.style.display = `block`;
                    input.style.borderColor = `rgba(255, 0, 0, 0.808)`;
                    return this._regExs.phone.test(input.value);
                }
            }
        }
    }

    _checkBox() {
        for(const input of this._form) {
            if(input.type === `checkbox`) return input.checked;
        }
    }

}