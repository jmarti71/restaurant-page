const loadMenu = (bodyContent) => {

    const items = [
        {
            Name: "Blueberry Danish         $3",
            Descrition: "Our crisp and flaky danish filled with house-made blueberry compote and topped with powdered sugar",
            Image: "../assets/danish.jpg"
        },
        {
            Name: "Taramisu         $6",
            Descrition: "Flavored with toasted coffee liqueur and mocha cream, enjoy these layers of flavor with any hot beverage",
            Image: "../assets/taramisu.jpg",
        },
        {
            Name: "Macarons         $2",
            Descrition: "Choose any available flavor from our selection of delectable macarons",
            Image: "../assets/menu-macarons.jpg",
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
        itemCard.append(namePrice, itemDesc, itemImg);
        bodyContent.append(itemCard);
    }
}

export { loadMenu };