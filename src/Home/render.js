// Original html:
//
// <div class="hook" style="
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	gap: 3rem;
// ">
// 	<img src="../src/assets/restaurant.jpg" alt="An image of an italian restaurant" style="
// 		aspect-ratio: 16 / 9;
// 		width: 30vw;
// 	" />
//
// 	<div class="content" style="
// 		width: 30vw;
// 	">
// 		<h1>Restaurant Odin</h1>
//
// 		<p>Has the finest cuisine on the land. Farm fresh ingredients, good quality service, hospitable crew. Overall, a
// 			good time.</p>
// 	</div>
// </div>
//

import { children, replace_node } from "../dsl-utils.js";
import "./style.css";
import Restaurant from "../assets/restaurant.jpg";

function init_home_element() {
	const dummy_image_element = 'replace-me';

	const Home =
		children(document.createElement('div'),
			document.createElement(dummy_image_element),

			children(document.createElement('div'),
				document.createElement('h1'),
				document.createElement('p'),
			),
		);

	Home.setAttribute('id', 'home');
	Home.querySelector('div').classList.add('content');
	{
		const image = new Image();
		image.classList.add('restaurant-image');
		image.setAttribute('src', Restaurant);
		image.setAttribute('alt',  "An image of an italian restaurant");

		replace_node(Home.querySelector(`${dummy_image_element}`), image);
	}
	Home.querySelector('div h1').innerText = "Restaurant Odin";
	Home.querySelector('div p').innerText = "Has the finest cuisine on the land. Farm fresh ingredients, good quality service, hospitable crew. Overall, a good time.";

	return Home;
}

export const Home = init_home_element();

export default {
	Home,
};
