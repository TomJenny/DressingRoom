import { DressRoomServices } from '../utils/DressRoomServices.js'
import { Item } from '../models/Item.js'
import { ChangeStyle } from '../models/ChangeStyle.js'


const DressRoomSer = new DressRoomServices();

let getELE = (id) => document.querySelector(id);
let getArrayELE = (id) => document.querySelectorAll(id);

const TryOn = () => {
    DressRoomSer.getListObjStyle()
        .then(objStyle => {
            console.log(objStyle.data);
            getArrayELE("button.changStyle").forEach(btn => {
                btn.addEventListener("click", () => {

                    let typeELE = btn.getAttribute("data-type");
                    let background = btn.getAttribute("data-imgsrcpng");
                    let chooseStyle = objStyle.data.find((style) => style.type === typeELE);

                    const changeStyle = new ChangeStyle({ ...chooseStyle, background: background });
                    changeStyle.renderHTML();
                });
            });
        })
        .catch((error) => console.log(error))
}


const createHTML = () => {
    DressRoomSer.getListData()
        .then((result) => {
            let { navPills, tabPanes } = result.data;

            //render HTML Navpills and TabPanes
            let contentNavPills = '';
            let contentTabPanes = '';

            navPills.map(valueTitle => {
                let contentItem = '';

                contentNavPills += `
                <li class="nav-item">
            <a class="nav-link btn-default" data-toggle="pill" href="#${valueTitle.type}">
            ${valueTitle.showName}
            </a>
          </li>`;

                tabPanes.map(valueItem => {

                    let { id, type, name, desc, imgSrc_jpg, imgSrc_png } = valueItem;
                    const item = new Item(id, type, name, desc, imgSrc_jpg, imgSrc_png);

                    if (valueItem.type === valueTitle.type) {
                        contentItem += item.renderHTML();
                    }

                });

                //render HTML content TabPanes
                let activeClass = valueTitle.tabName === "tabTopClothes" ? "active" : "";
                let fadeClass = valueTitle.tabName !== "tabTopClothes" ? "fade" : "";

                contentTabPanes += ` <div class="tab-pane container ${fadeClass} ${activeClass}" id="${valueTitle.type}">
                <div class="row">${contentItem} </div>
                </div>`;

            });

            getELE(".nav-pills").innerHTML = contentNavPills;
            getELE(".tab-content").innerHTML = contentTabPanes;

            TryOn();
        })
        .catch((err) => {
            console.log(err);
        });
}
createHTML();

