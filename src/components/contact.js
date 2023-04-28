import "../styles/contact.css";

function Contact() {
  const container = document.getElementsByClassName("container")[0];

  const contact_background = document.createElement("div");
  contact_background.classList.add("contact_container");

  const phone = document.createElement("h1");
  phone.textContent = "Phone Number";
  phone.classList.add("title");
  contact_background.appendChild(phone);

  const phdetail = document.createElement("p");
  phdetail.textContent = "(908) 925-7728";
  phdetail.classList.add("details");
  contact_background.appendChild(phdetail);

  const address = document.createElement("h1");
  address.textContent = "Address";
  address.classList.add("title");
  contact_background.appendChild(address);

  const adrdetail = document.createElement("p");
  adrdetail.textContent = "1004 Chandler Ave Linden - New Jersey(NJ) - 07036";
  adrdetail.classList.add("details");
  contact_background.appendChild(adrdetail);

  container.appendChild(contact_background);
}
export default Contact;
