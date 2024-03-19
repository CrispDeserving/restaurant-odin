import { Home } from "./Home/render.js";
import { Menu } from "./Menu/render.js";
import { Footer } from "./Footer/render.js";
import { About, AboutFooter } from "./About/render.js";
import { replace_inside } from "./dsl-utils.js"; 
import "./assets/theme.css";

const Content = document.querySelector('#content');

function bind_dom_elements({ home_btn, menu_btn, about_btn, dummy_footer }) {
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

    about_btn.addEventListener("click", () => {
	replace_inside(Content, About);

	if (dummy_footer.querySelector('.Footer') !== null) {
	    replace_inside(dummy_footer, AboutFooter);
	}
    });

    replace_inside(dummy_footer, Footer);
}

window.addEventListener('DOMContentLoaded', () => {
    console.log("hello world");

    bind_dom_elements({
	home_btn: document.querySelector('#home_btn'),
	menu_btn: document.querySelector('#menu_btn'),
	about_btn: document.querySelector('#about_btn'),
	dummy_footer: document.querySelector('#dummy_footer'),
    });
    Content.appendChild(Home);
});
