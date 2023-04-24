function navbar() {
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
  navButtons.appendChild(home);

  const about = document.createElement("a");
  about.classList.add("about");
  about.textContent = "ABOUT";
  navButtons.appendChild(about);

  const contact = document.createElement("a");
  contact.classList.add("contact");
  contact.textContent = "CONTACT";
  navButtons.appendChild(contact);

  navEle.appendChild(navButtons);

  nav.appendChild(navEle);

  content.appendChild(nav);

  return nav;
}
export default navbar;
