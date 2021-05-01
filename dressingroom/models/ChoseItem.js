export class Item {
  constructor(id, type, name, desc, imgSrc_jpg, imgSrc_png) {
    this.id = id;
    this.type = type;
    this.name = name;
    this.desc = desc;
    this.imgSrc_jpg = imgSrc_jpg;
    this.imgSrc_png = imgSrc_png;
  }
  renderHTML() {

    let contentHTML = '';

    contentHTML = `<div class="col-md-3">
      <div class="card text-center">
        <img src=" ${this.imgSrc_jpg}">
        <h4>
          <b>${this.name}</b>
        </h4>
        <button data-id="${this.imgSrc_jpg}" data-type="${this.type}" data-name="${this.name}" data-desc="${this.desc}" data-imgsrcjpg="${this.imgSrc_jpg}" data-imgsrcpng="${this.imgSrc_png}" class="changStyle">Thử đồ</button>
      </div>
    </div>`;
    return contentHTML;

  }
}