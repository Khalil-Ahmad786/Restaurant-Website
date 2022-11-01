
// -----------------------------------------Biryani----------------------------------------------------------

const grid = document.querySelector(".gridSpace");
const menuItems = [
  {
    id: 1,
    dishName: "1. Chicken Biryani",
    description:
      "This special biryani is perfect for vegetarians because instead of meat it uses potatoes and eggs in it. It is less spicy biryani compared to other traditional spicy biryani. Soft boiled eggs give it an extra flavor along with the delicious meat. This variation of biryani is getting massive attention in different cities of Pakistan because of its great taste",
    price: 150,
    image: "assets/biryaniItems/1.jpg",
  },
  {
    id: 2,
    dishName: "2.	Mughlai Biryani",
    description:
      "Mughlai biryani reminds us regarding the way Mughals use to prepare this dish. The key difference in this biryani is that the rice is fried explicitly in the pure ghee before mixing it with meat and other spices. To further enhance the richness of this biryani, a specific amount of dry fruits are also added in it before serving which makes it a perfect fit for the Mughals.",
    price: 180,
    image: "assets/biryaniItems/2.jpg",
  },
  {
    id: 3,
    dishName: "3. Sindhi Biryani",
    description:
      "Sindhi Biryani comes from the Sindh region of Pakistan. This biryani is not heavily stuffed with food color that’s why it has a much lighter color in it. A thick curry of goat meat is included with rice in this biryani. It is also decorated with dry fruits, nuts, and crispy fried onion to make it look yummy.",
    price: 150,
    image: "assets/biryaniItems/3.jpg",
  },
  {
    id: 4,
    dishName: "4.	Hyderabadi Biryani",
    description:
      "This type of biryani is quite popular among the people of Hyderabad. It has some resemblance with Iranian recipe. In this variety of biryani, marination of meat plays a vital role because the meat is kept overnight after marination process which further soaked in yogurt before moving towards the step of layering. Fried onions on top of it along with a wide range of spices are something that makes it different from others.",
    price: 160,
    image: "assets/biryaniItems/4.jpg",
  },
  {
    id: 5,
    dishName: "5. Lahore Biryani",
    description:
      "This biryani is less spicy as compared to other biryanis. It is renowned for its excellent taste and is highly preferred in Pakistan. What makes it unique from other is that the rice and meat are cooked in different vessels until they are half done, and after that, they merged together till they are cooked thoroughly. This way of cooking offers it a delectable and enjoyable flavor to enjoy. Kewra water is also added in the final stages to give it some extra taste.",
    price: 180,
    image: "assets/biryaniItems/5.jpg",
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




