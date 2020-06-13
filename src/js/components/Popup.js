export default class Popup {
    constructor(elem) {
        this._elem = elem;
    }

    open() {
        this._elem.style.display = `flex`;
    }

    close() {
        this._elem.style.display = `none`
    }
}