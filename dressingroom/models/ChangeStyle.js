export class ChangeStyle {
    constructor(ELE, width, height, background, top = "initial", bottom = "initial", left = "initial", right = "initial", transform, zIndex) {
        this.ELE = ELE;
        this.width = width;
        this.height = height;
        this.background = background;
        this.top = top;
        this.bottom = bottom;
        this.left = left;
        this.right = right;
        this.transform = transform;
        this.zIndex = zIndex;
    }
    renderHTML() {
        this.ELE.style.position = "absolute";
        this.ELE.style.width = this.width;
        this.ELE.style.height = this.height;
        this.ELE.style.background = `url(${this.background})`;
        this.ELE.style.bottom = this.bottom;
        this.ELE.style.top = this.top;
        this.ELE.style.right = this.right;
        this.ELE.style.left = this.left;
        this.ELE.style.transform = this.transform;
        this.ELE.style.zIndex = this.zIndex;
    }
}