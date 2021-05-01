import { DressRoomServices } from '../utils/DressRoomServices.js'
import { Item } from '../models/ChoseItem.js'
import { ChangeStyle } from '../models/ChangeStyle.js'


const DressRoomSer = new DressRoomServices();
let getELE = (id) => document.querySelector(id);
let getArrayELE = (id) => document.querySelectorAll(id);


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
                    let item = new Item(id, type, name, desc, imgSrc_jpg, imgSrc_png);

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

            //
            const TryOn = () => {

                getArrayELE("button.changStyle").forEach(item => {
                    item.addEventListener("click", () => {
                        let type = item.getAttribute("data-type");
                        let background = item.getAttribute("data-imgsrcpng");

                        switch (type) {
                            case "topclothes":
                                const ChangTopClothes = new ChangeStyle(
                                    getELE(".bikinitop"),
                                    "500px",
                                    "500px",
                                    background,
                                    "-9%",
                                    undefined,
                                    "-5%",
                                    undefined,
                                    "scale(0.5)",
                                    3);
                                ChangTopClothes.renderHTML();
                                break;
                            case "botclothes":
                                const Changbotclothes = new ChangeStyle(
                                    getELE(".bikinibottom"),
                                    "500px",
                                    "1000px",
                                    background,
                                    "-30%",
                                    undefined,
                                    "-5%",
                                    undefined,
                                    "scale(0.5)",
                                    2);
                                Changbotclothes.renderHTML();
                                break;
                            case "shoes":
                                const Changshoes = new ChangeStyle(
                                    getELE(".feet"),
                                    "500px",
                                    "1000px",
                                    background,
                                    undefined,
                                    "-37%",
                                    undefined,
                                    "-3.5%",
                                    "scale(0.5)",
                                    1);
                                Changshoes.renderHTML();
                                break;
                            case "handbags":
                                const Changhandbags = new ChangeStyle(
                                    getELE(".handbag"),
                                    "500px",
                                    "1000px",
                                    background,
                                    undefined,
                                    "-40%",
                                    undefined,
                                    "-3.5%",
                                    "scale(0.5)",
                                    4);
                                Changhandbags.renderHTML();
                                break;

                            case "necklaces":
                                const Changnecklaces = new ChangeStyle(
                                    getELE(".necklace"),
                                    "500px",
                                    "1000px",
                                    background,
                                    undefined,
                                    "-40%",
                                    undefined,
                                    "-3.5%",
                                    "scale(0.5)",
                                    4);
                                Changnecklaces.renderHTML();
                                break;
                            case "hairstyle":
                                const Changhairstyle = new ChangeStyle(
                                    getELE(".hairstyle"),
                                    "1000px",
                                    "1000px",
                                    background,
                                    undefined,
                                    "-75%",
                                    undefined,
                                    "-57%",
                                    "scale(0.15)",
                                    4);
                                Changhairstyle.renderHTML();
                                break;
                            case "background":
                                getELE(".background").style.backgroundImage = `url(${background})`;
                                break;
                        }
                    });
                })
            }
            TryOn();

        })
        .catch((err) => {
            console.log(err);
        });
}
createHTML();

