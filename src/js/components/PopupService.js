import Popup from "./Popup";

export default class PopupService extends Popup {
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