import "../styles/ramenRoll.css";
import Ramenroll from "../assets/ramen.webp";

function ramen() {
  const content = document.getElementById("content");

  const ramen_background = document.createElement("div");
  ramen_background.classList.add("ramen_container");

  const ramen_img = document.createElement("img");
  ramen_img.src = Ramenroll;
  ramen_img.setAttribute("alt", "bowl of ramen");
  ramen_img.classList.add("ramenImage");

  ramen_background.appendChild(ramen_img);

  content.appendChild(ramen_background);
}
export default ramen;
