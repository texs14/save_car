import Popup from "./Popup";

export default class PopupService extends Popup {
    constructor(elem) {
        super(elem);
    }

    _renderContent({target}) {
        
            
    }

    show() {
        this.open();
    }

    hidden() {
        this.close();
    }
}