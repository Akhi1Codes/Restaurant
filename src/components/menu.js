import "../styles/menu.css";
import Curryramen from "../assets/curryramen.webp";
import Mazemen from "../assets/mazemen.webp";
import Sappororamen from "../assets/sappororamen.webp";
import Shoyuramen from "../assets/shoyuramen.webp";
import Tantanmen from "../assets/tantanmen.webp";
import Tonkotsuramen from "../assets/tonkotsuramen.webp";

function Menu() {
  const items = [
    {
      name: "Curry Ramen",
      image: Curryramen,
      price: "$3.00",
    },
    {
      name: "Mazenmen Ramen",
      image: Mazemen,
      price: "$2.00",
    },
    {
      name: "Sapporo Ramen",
      image: Sappororamen,
      price: "$5.00",
    },
    {
      name: "Shoyu Ramen",
      image: Shoyuramen,
      price: "$2.50",
    },
    {
      name: "TanTanmen Ramen",
      image: Tantanmen,
      price: "$3.50",
    },
    {
      name: "Tonkotsu Ramen",
      image: Tonkotsuramen,
      price: "$4.00",
    },
  ];

  const container = document.getElementsByClassName("container")[0];

  const menu_background = document.createElement("div");
  menu_background.classList.add("menu_container");

  const menu_items = document.createElement("div");
  menu_items.classList.add("menu_items");

  for (let i = 0; i < items.length; i++) {
    const items_container = document.createElement("div");
    items_container.classList.add("item_container");

    const item_name = document.createElement("h3");
    item_name.classList.add("itemName");
    item_name.textContent = items[i].name;

    const item_image = document.createElement("img");
    item_image.classList.add("itemImage");
    item_image.src = items[i].image;

    const item_price = document.createElement("p");
    item_price.classList.add("itemPrice");
    item_price.textContent = items[i].price;

    items_container.appendChild(item_image);
    items_container.appendChild(item_name);
    items_container.appendChild(item_price);

    menu_items.appendChild(items_container);
  }
  console.log("connected");
  menu_background.appendChild(menu_items);
  container.appendChild(menu_background);
}
export default Menu;
