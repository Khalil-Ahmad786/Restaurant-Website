
// -----------------------------------------Tikka----------------------------------------------------------

const grid = document.querySelector(".gridSpace");
const menuItems = [
  {
    id: 1,
    dishName: "1. Reshmi Tikka",
    description:
      "The creamy texture and the tenderness of the chicken, makes this one of the most popular Indian kebab recipes. Bake till crisp and golden, squeeze half a lime over it and serve hot",
    price: 120,
    image: "assets/tikkaItems/1.jpg",
  },
  { 
    id: 2,
    dishName: "2. Putta Tikka",
    description:
      "Make the marinade for these Peshawari style mutton tikkas with yogurt, red chilli powder, turmeric, white pepper powder, red and green chillies, coriander seeds, cumin seeds and carom seeds",
    price: 100,
    image: "assets/tikkaItems/2.jpg",
  },
  {
    id: 3,
    dishName: "3. Paneer Tikka",
    description:
      "Paneer tikka is a perfect starter for any dinner party - skewered, grilled till golden brown and the result? Downright divine.",
    price: 1800,
    image: "assets/tikkaItems/3.jpg",
  },
  {
    id: 4,
    dishName: "4. Laksa Chicken Tikka",
    description:
      "Marinated in the beautiful flavours of laksa paste and yogurt, chicken pieces are grilled over charcoal fire.",
    price: 150,
    image: "assets/tikkaItems/4.jpg",
  },
  {
    id: 5,
    dishName: "5. Kasundi Murgh Tikka",
    description:
      "Want to bask in the glory of your next party? Try this murgh tikka - flavoured with kasundi, spruced up with chaat masala and lemon juice, and garnished with fresh coriander.",
    price: 300,
    image: "assets/tikkaItems/5.jpg",
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




