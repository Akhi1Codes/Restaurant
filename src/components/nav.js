import "../styles/nav.css";
import Home from "./home";
import Menu from "./menu";
import Contact from "./contact";

function Navbar() {
  const content = document.getElementById("content");

  const nav = document.createElement("div");
  nav.classList.add("container");

  const navEle = document.createElement("div");
  navEle.classList.add("nav_elements");

  const logo = document.createElement("div");
  logo.classList.add("logo");
  logo.textContent = "Tensei Ramen";
  navEle.appendChild(logo);

  const navButtons = document.createElement("ul");
  navButtons.classList.add("nav-elements");

  const home = document.createElement("a");
  home.classList.add("home");
  home.textContent = "HOME";
  home.addEventListener("click", (e) => {
    const container = document.getElementById("content");

    container.textContent = "";
    Navbar();
    Home();
  });
  navButtons.appendChild(home);

  const menu = document.createElement("a");
  menu.classList.add("menu");
  menu.textContent = "MENU";
  menu.addEventListener("click", (e) => {
    const container = document.getElementById("content");

    container.textContent = "";

    Navbar();
    Menu();
  });
  navButtons.appendChild(menu);

  const contact = document.createElement("a");
  contact.classList.add("contact");
  contact.textContent = "CONTACT";
  contact.addEventListener("click", (e) => {
    const container = document.getElementById("content");

    container.textContent = "";

    Navbar();
    Contact();
  });
  navButtons.appendChild(contact);

  navEle.appendChild(navButtons);

  nav.appendChild(navEle);

  content.appendChild(nav);
}
export default Navbar;
