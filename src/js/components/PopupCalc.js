import Popup from "./Popup";

export default class PopupCalc extends Popup {
    constructor(elem) {
        super(elem);
    }


    show() {
        this.open();
    }

    hidden() {
        this.close();
    }
}