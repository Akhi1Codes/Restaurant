import "../styles/ramenRoll.css";

function ramen() {
  const content = document.getElementById("content");

  const ramen_background = document.createElement("div");
  ramen_background.classList.add("ramen_container");

  const ramen_img = document.createElement("img");
  ramen_img.src = "../assets/ramen.png";
  ramen_img.classList.add("ramenImage");

  ramen_background.appendChild(ramen_img);

  content.appendChild(ramen_background);
}
export default ramen;
