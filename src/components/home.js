function home() {
  const container = document.getElementsByClassName("container")[0];

  const home_background = document.createElement("div");
  home_background.classList.add("home_container");

  const text = document.createElement("p");
  const node = document.createTextNode(
    " Happiness is when you eat ramen after feeling absolutely famished."
  );
  text.appendChild(node);
  text.classList.add("thought");
  home_background.appendChild(text);

  container.appendChild(home_background);

  return home_background;
}
export default home;
