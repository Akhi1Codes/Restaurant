function menu() {
  const items = [
    {
      name: "Kotteri Ramen",
      image: "../assets/kotteri.webp",
      price: "$2.66",
    },
    {
      name: "Curry Ramen",
      image: "../assets/curryramen.webp",
      price: "$3.00",
    },
    {
      name: "Mazenmen Ramen",
      image: "../assets/mazemen.webp",
      price: "$2.00",
    },
    {
      name: "Sapporo Ramen",
      image: "../assets/sappororamen.webp",
      price: "$5.00",
    },
    {
      name: "Shoyu Ramen",
      image: "../assets/shoyuramen.webp",
      price: "$2.50",
    },
    {
      name: "TanTanmen Ramen",
      image: "../assets/tantanmen.webp",
      price: "$3.50",
    },
    {
      name: "Tonkotsu Ramen",
      image: "../assets/tonktsuramen.webp",
      price: "$4.00",
    },
  ];

  const container = document.getElementsByClassName("container")[0];

  const menu_background = document.createElement("div");
  menu_background.classList.add("menu_container");

  const menu_items = document.createElement("div");
  menu_items.classList.add("menu_items");

  console.log("connected");

  container.appendChild(menu_background);

  return menu_background;
}
export default menu;
