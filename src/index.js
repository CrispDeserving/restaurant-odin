import { Home } from "./Home/render.js";

function handle_home_click() {
	document.querySelector('#content').appendChild(Home);
}

window.addEventListener('DOMContentLoaded', () => {
    console.log("hello world");

    handle_home_click();
});
