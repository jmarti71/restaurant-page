import Danish from '../dist/assets/danish.jpg';
import Taramisu from '../dist/assets/taramisu.jpg';
import Macarons from '../dist/assets/menu-macarons.jpg';

function loadMenu (bodyContent){
    const items = [
        {
            Name: "Blueberry Danish         $3",
            Descrition: "Our crisp and flaky danish filled with house-made blueberry compote and topped with powdered sugar",
            Image: Danish,
            Alt: "Pastry filled with blueberries",
        },
        {
            Name: "Taramisu         $6",
            Descrition: "Flavored with toasted coffee liqueur and mocha cream, enjoy these layers of flavor with any hot beverage",
            Image: Taramisu,
            Alt: "A slice of taramisu topped with cocoa powder",
        },
        {
            Name: "Macarons         $2",
            Descrition: "Choose any available flavor from our selection of delectable macarons",
            Image: Macarons,
            Alt: "Several macarons next to a cup of coffee",
        }
    ]
    for (let i = 0; i < items.length; i++) {
        const itemCard = document.createElement('div');
        itemCard.classList.add('content-card');
        const namePrice = document.createElement('p');
        namePrice.textContent = items[i].Name;
        const itemDesc = document.createElement('p');
        itemDesc.textContent = items[i].Descrition;
        const itemImg = document.createElement('img');
        itemImg.classList.add("menu-img");
        itemImg.src = items[i].Image;
        itemImg.alt = items[i].Alt;
        itemCard.append(namePrice, itemDesc, itemImg);
        bodyContent.append(itemCard);
    }
}

export { loadMenu };