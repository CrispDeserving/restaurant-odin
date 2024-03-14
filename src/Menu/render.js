import { children, replace_node } from '../dsl-utils.js';

import Tiramisu from '../assets/tiramisu.jpg';
import Lasagna from '../assets/lasagna.jpg';
import Lobster from '../assets/lobster.jpg';

import './style.css';


function init_menu_element() {
	const dummy_image_element = "replace-me";
	const MenuWrapper = children(document.createElement('div'),
		document.createElement('h2'),

		children(document.createElement('ul'),
			[
				"Stylish Tiramisu",
				"Marked up Lasagna",
				"Java Baked Lobster",
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

	MenuWrapper.classList.add("wrapper");

	MenuWrapper.querySelector('h2').innerText = "Menu";
	MenuWrapper.querySelector('ul').classList.add("Menu");
	MenuWrapper.querySelectorAll('li').forEach(element => {
		element.classList.add("MenuItem");
	});
	{
		const image = new Image();
		image.setAttribute('src', Tiramisu);
		image.setAttribute('alt', "A serving of tiramisu, topped with mint, presented in a white table in a brick wall background, with wine on the side.");

		const temp = MenuWrapper.querySelector(`li[data-index="0"]`);
		replace_node(temp.querySelector(`${dummy_image_element}`), image);

		const p_tag = temp.querySelector('p');
		p_tag.innerText = "Mint flavoured tiramisu for the daring. Balances the richness of the cream. So much cascading flavours, so much style.";
	}
	{
		const image = new Image();
		image.setAttribute('src', Lasagna);
		image.setAttribute('alt', "Delectable lasagna, topped with basil, presented in a wooden table with bread on the side.");

		const temp = MenuWrapper.querySelector(`li[data-index="1"]`);
		replace_node(temp.querySelector(`${dummy_image_element}`), image);

		const p_tag = temp.querySelector('p');
		p_tag.innerText = "Lasagna with layers of pasta complimenting each other. Pasta lined up with pasta, marked up for your pleasure.";
	}
	{
		const image = new Image();
		image.setAttribute('src', Lobster);
		image.setAttribute('alt', "Lobster served with corn, cucumbers, tomatoes, on a illustrated plate, then placed on a wooden table.");

		const temp = MenuWrapper.querySelector(`li[data-index="2"]`);
		replace_node(temp.querySelector(`${dummy_image_element}`), image);

		const p_tag = temp.querySelector('p');
		p_tag.innerText = "Inspired by the Java, the lobster is baked with various mix-ins and delectable soup things. Very tasty and dangerous.";
	}
	return MenuWrapper;
}

export const Menu = init_menu_element();

export default {
	Menu,
};
