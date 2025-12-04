import "./styles.css";
import { home } from "./home.js";
import { menu } from "./menu.js";
import { contact } from "./contact.js";

// function that loads the content div with module imports
function contentLoad(module) {
    const content = document.getElementById("content");
    content.innerHTML = ""
    module.forEach(div => {
        content.appendChild(div);
    });
};

// default load page for website
(function defaultLoad() {
    contentLoad(home);
})();

// mouse events for the buttons
const homeButton = document.getElementById("home");
const menuButton = document.getElementById("menu");
const contactButton = document.getElementById("contact");

homeButton.addEventListener("click", () => {
    contentLoad(home);
});

menuButton.addEventListener("click", () => {
    contentLoad(menu);
});

contactButton.addEventListener("click", () => {
    contentLoad(contact)
});