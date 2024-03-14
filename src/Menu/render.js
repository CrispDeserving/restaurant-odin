import { children } from '../dsl-utils.js';
import './style.css';


function init_menu_element() {
	const dummy_image_element = "replace-me";
	const Menu = children(document.createElement('div'),
		document.createElement('h2'),

		children(document.createElement('ul'),
			[
				"Stylish Tiramisu",
				"Marked up Lasagna",
				"Java Baked Bream",
			].map((dish_title, i) => {
				const MenuItem = children(document.createElement('li'),
					document.createElement('h3'),

					children(document.createElement('div'),
						document.createElement(dummy_image_element),
						document.createElement('p'),
					),
				);
				MenuItem.querySelector("h3").innerText = dish_title;
				MenuItem.setAttribute('data-index', i);
				return MenuItem;
			}),
		),
	);

	return Menu;
}

export const Menu = init_menu_element();

export default {
	Menu,
};
