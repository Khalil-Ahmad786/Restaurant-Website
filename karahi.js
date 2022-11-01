
// -----------------------------------------Karahi----------------------------------------------------------


const grid = document.querySelector(".gridSpace");
const menuItems = [
  {
    id: 1,
    dishName: "1. CHICKEN KARAHI",
    description:
      "A specialty of Sukkur’s food street, this dish is made by stir-frying pieces of chicken with tomatoes, green chili, ginger, garlic along with chef’s spices on high flame in a karahi, the wok-like pan that gives the dish its name. The eater mops up all the gravy with pieces of naan. Try the Chicken Karahi: Bones-in, Boneless Dark Meat or Boneless White Meat.",
    price: 1200,
    image: "assets/KarahisItems/1karahi.jpg",
  },
  {
    id: 2,
    dishName: "2. CHICKEN WHITE KARAHI",
    description:
      "A specialty for the mild spice lovers, a recipe from the secret diaries of Mughals. Chicken pieces cooked on low flame with ginger garlic paste, salt, mild spices, black pepper and the secret white sauce from the diaries of Mughal chefs. Try the Chicken White Karahi: Bones-in, Boneless Dark Meat or Boneless White Meat. ",
    price: 1300,
    image: "assets/karahisItems/2whiteKarahi.jpg",
  },
  {
    id: 3,
    dishName: "3. CHICKEN PESHAWARI KARAHI",
    description:
      "A traditional dish from the borders of Torkham to Peshawar. Chicken pieces cooked on high flame with salt and black pepper, freshly diced tomatoes and green chilles. Try the Chicken Peshwari Karahi: Bones-in, Boneless Dark Meat or Boneless White Meat.",
    price: 1250,
    image: "assets/karahisItems/3chickenpeshwarikarahi.jpg",
  },
  {
    id: 4,
    dishName: "4.GOAT KARAHI",
    description:
      "Goat meat is deliciously tender and juicy.  Our Goat Karahi also known as “Karahi Gosht”, “Kadai Gosht” and many other names around the world,  yields tender succulent meat cooked in a spicy and aromatic gravy.",
    price: 2000,
    image: "assets/karahisItems/4muttonKarahi.jpg",
  },
  {
    id: 5,
    dishName: "5.LAMB KARAHI",
    description:
      "How did the traditional lamb karahi come to be? Asian style traditional dish lamb pieces cooked with ginger garlic paste and fresh diced tomatoes on high flame together with chef’s secret spices.",
    price: 1900,
    image: "assets/KarahisItems/5lambKarahi.jpg",
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

   <a>  <button onClick="alert('${item.dishName} order is placed!')" id=${String(item.id)} class="btn btn-dark" href="#popup1">Order Now</button> </a>
   

    



    


    
    </div>`;
});


// ----------------------------------------------------Biryani--------------------------------------------------


// const biryaniGrid = document.querySelector(".biryaniSpace");
// const biryaniItems = [
//   {
//     id: 1,
//     dishName: "Chicken Biryani",
//     description:
//       "Butter chicken, traditionally known as murgh makhani, an Indian dish originating in Delhi, which is a type of curry made fromchicken with a spiced tomato and butter sauce. Its sauce is known for its rich texture",
//     price: 120,
//     image: "assets/menuItems/butterChicken.jpg",
//   },
//   {
//     id: 2,
//     dishName: "Chicken karahi",
//     description:
//       "Chicken Karahi, or kadai chicken, is a dish that originates from the northern and northwestern parts of South Asia. The dish isprepared in a karahi, a type of wok often used in South Asian cooking. It can take between 30 and 50 minutes to prepare and cookthe dish. It is usually served with naan, roti or rice",
//     price: 1000,
//     image: "assets/menuItems/karahi.jpg",
//   },
//   {
//     id: 3,
//     dishName: "Mutton karahi",
//     description:
//       "Mutton karahi is a Pakistani style lamb curry made with diced lamb pieces in a rich and spicy tomato-based gravy, with lots of fresh ginger and coriander on top. Best served with naan",
//     price: 1800,
//     image: "assets/menuItems/mutton.jpg",
//   },
//   {
//     id: 4,
//     dishName: "Chicken Biryani",
//     description:
//       "Biryani is a mixed rice dish originating among the Muslims of the Indian subcontinent. It is made with Indian spices, rice, andusually some type of meat or in some cases without any meat",
//     price: 150,
//     image: "assets/menuItems/biryani.jpg",
//   },
//   {
//     id: 5,
//     dishName: "Chicken Tikka",
//     description:
//       "Chicken tikka is a chicken dish originating in the Indian subcontinent during the Mughal era. The dish is popular in India, Bangladesh and Pakistan.",
//     price: 300,
//     image: "assets/menuItems/tikka.jpg",
//   },
// ];

// biryaniItems.forEach((item) => {
//   biryaniGrid.innerHTML += `<div class="imageContainer">
//     <img
//       class="offerImage"
//       src=${item.image}
//       alt=${item.dishName}
//     />
//     </div>
//     <div class="offerContainer">
//     <h1 class="display-6 headingFont">${item.dishName}</h1>
//     <p class="lead">
//       ${item.description}
//     </p>
//     <p class="lead">RS: ${item.price} a Portion</p>
//     <button onClick="alert('${item.dishName} order is placed!')" id=${String(
//     item.id
//   )} class="btn btn-dark">Order Now</button>
//     </div>`;
// });


// -------------------------------------------Tikka-----------------------------------------------------------


// -------------------------------------------Cold Drinks-----------------------------------------------------------




