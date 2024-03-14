import { Home } from "./Home/render.js";
import { Menu } from "./Menu/render.js";
import { replace_inside } from "./dsl-utils.js"; 

const Content = document.querySelector('#content');

function bind_buttons({ home_btn, menu_btn, about_btn }) {
    home_btn.addEventListener("click", () => {
	replace_inside(Content, Home);
    });

    menu_btn.addEventListener("click", () => {
	replace_inside(Content, Menu);
    });

    about_btn.addEventListener("click", () => {
	alert("todo!!");
	// replace_inside(Content, About);
    });
}

window.addEventListener('DOMContentLoaded', () => {
    console.log("hello world");

    bind_buttons({
	home_btn: document.querySelector('#home_btn'),
	menu_btn: document.querySelector('#menu_btn'),
	about_btn: document.querySelector('#about_btn'),
    });
    Content.appendChild(Home);
});
