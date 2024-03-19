import { Home } from "./Home/render.js";
import { Menu } from "./Menu/render.js";
import { Footer } from "./Footer/render.js";
import { Contact, ContactFooter } from "./Contact/render.js";
import { replace_inside } from "./dsl-utils.js"; 
import "./assets/theme.css";

const Content = document.querySelector('#content');

function bind_dom_elements({ home_btn, menu_btn, contact_btn, dummy_footer }) {
    home_btn.addEventListener("click", () => {
	replace_inside(Content, Home);

	if (dummy_footer.querySelector('.Footer') === null) {
	    replace_inside(dummy_footer, Footer);
	}
    });

    menu_btn.addEventListener("click", () => {
	replace_inside(Content, Menu);

	if (dummy_footer.querySelector('.Footer') === null) {
	    replace_inside(dummy_footer, Footer);
	}
    });

    contact_btn.addEventListener("click", () => {
	replace_inside(Content, Contact);

	if (dummy_footer.querySelector('.Footer') !== null) {
	    replace_inside(dummy_footer, ContactFooter);
	}
    });

    replace_inside(dummy_footer, Footer);
}

window.addEventListener('DOMContentLoaded', () => {
    console.log("hello world");

    bind_dom_elements({
	home_btn: document.querySelector('#home_btn'),
	menu_btn: document.querySelector('#menu_btn'),
	contact_btn: document.querySelector('#contact_btn'),
	dummy_footer: document.querySelector('#dummy_footer'),
    });
    Content.appendChild(Home);
});
