export class ChangeStyle {
    constructor({ ...obj }) {
        this.ELE = obj.element;
        this.width = obj.width;
        this.height = obj.height;
        this.background = obj.background;
        this.top = obj.top;
        this.bottom = obj.bottom;
        this.left = obj.left;
        this.right = obj.right;
        this.transform = obj.transform;
        this.zIndex = obj.zIndex;
    }
    renderHTML() {
        const getELEHTML = document.querySelector(this.ELE);
        getELEHTML.style.width = this.width;
        getELEHTML.style.height = this.height;
        getELEHTML.style.backgroundImage = `url(${this.background})`;
        getELEHTML.style.bottom = this.bottom;
        getELEHTML.style.top = this.top;
        getELEHTML.style.right = this.right;
        getELEHTML.style.left = this.left;
        getELEHTML.style.transform = this.transform;
        getELEHTML.style.zIndex = this.zIndex;
    }
}