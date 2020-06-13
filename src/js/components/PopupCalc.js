import Popup from "./Popup";

export default class PopupCalc extends Popup {
    constructor(elem) {
        super(elem);
    }

    // _renderContent() {
    //     const tempCalc = document.createElement('iframe');
    //     tempCalc.setAttribute('src', 'https://calcus.ru/kalkulyator-osago?embed=1&bgcolor=%FFFFFFA&buttoncolor=%232E8B57&region_id=50');
    //     tempCalc.setAttribute('frameborder', `0`);
    //     tempCalc.classList.add(`calc-form`);
    //     tempCalc.classList.add(`popup__content`);

    //     console.log(tempCalc);
    //     this._elem.append(tempCalc);

    // }

    // _clearPopup() {
    //     this._elem.querySelector('.popup__content').innerHTML = ``;
    // }

    show() {
        this.open();
        // this._renderContent();
    }

    hidden() {
        // this._clearPopup();
        this.close();
    }
}