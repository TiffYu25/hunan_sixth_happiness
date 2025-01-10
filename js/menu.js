let specials_create = function(data) {
    let container = document.getElementById("specials-container");

    for (let i = 0; i < data.length; i++) {
        let food = data[i];

        let foodItem = document.createElement("div");
        foodItem.classList.add("food-item");

        let foodItemName = document.createElement("div");
        foodItemName.classList.add("food-item-name");
        let listNumber = document.createElement("span");
        listNumber.classList.add("list-number");
        listNumber.appendChild(document.createTextNode(food.id + "."))
        let name = document.createElement("span");
        name.appendChild(document.createTextNode(food.name))

        foodItemName.appendChild(listNumber)
        foodItemName.appendChild(name)

        let foodItemPrice = document.createElement("div");
        foodItemPrice.classList.add("food-item-price");
        let lunchPrice = document.createElement("span");
        lunchPrice.appendChild(document.createTextNode("$" + food.lunch))
        let dinnerPrice = document.createElement("span");
        dinnerPrice.appendChild(document.createTextNode("$" + food.dinner))

        foodItemPrice.appendChild(lunchPrice)
        foodItemPrice.appendChild(dinnerPrice)

        if (food.isSpicy) {
            let chili = document.createElement("img");
            chili.src = "../images/misc/chili.png";
            chili.alt = "Spicy dish";

            let spicy = document.createElement("span");
            let em = document.createElement("em")
            em.appendChild(chili);
            spicy.appendChild(em);
            foodItemName.appendChild(spicy);

            foodItem.classList.add("spicy");
        }

        foodItem.appendChild(foodItemName);
        foodItem.appendChild(foodItemPrice);

        container.appendChild(foodItem);
    }
}

window.onload = function () {
    fetch('../misc/menu.json')
        .then((res) => res.json())
        .then(data => {
            specials_create(data.specials);
        });
}