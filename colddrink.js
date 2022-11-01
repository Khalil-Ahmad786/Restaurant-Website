
// -----------------------------------------Cold Drinks----------------------------------------------------------

const grid = document.querySelector(".gridSpace");
const menuItems = [
  {
    id: 1,
    dishName: "1 Liter",
    description:
      "",
    price: 80,
    image: "assets/colddrinksItems/1.jpg",
  },
  {
    id: 2,
    dishName: "1.5 Liters",
    description:
      "",
    price: 130,
    image: "assets/colddrinksItems/2.jpg",
  },
  {
    id: 3,
    dishName: "2.25 Liters",
    description:
      "",
    price: 230,
    image: "assets/colddrinksItems/3.jpg",
  },
  {
    id: 4,
    dishName: "Tin",
    description:
      "",
    price: 70,
    image: "assets/colddrinksItems/4.jpg",
  },
  {
    id: 5,
    dishName: "Regular",
    description:
      "",
    price: 50,
    image: "assets/colddrinksItems/5.jpg",
  },
];

menuItems.forEach((item) => {
  grid.innerHTML += `<div class="imageContainer">
    <img
      class="offerImage"
      src=${item.image}
      alt=${item.dishName}
    />
    </div>
    <div class="offerContainer">
    <h1 class="display-6 headingFont">${item.dishName}</h1>
    <p class="lead">
      ${item.description}
    </p>
    <p class="lead">RS: ${item.price} a Portion</p>
    <button onClick="alert('${item.dishName} order is placed!')" id=${String(
    item.id
  )} class="btn btn-dark">Order Now</button>
    </div>`;
});




