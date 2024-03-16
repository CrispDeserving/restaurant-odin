import { children, replace_node } from "../dsl-utils";
import MapPin from '../assets/map-pin.svg';
import Phone from '../assets/phone.svg';
import Twitter from '../assets/twitter.svg';
import './style.css';

function init_footer_element() {
	const dummy_image_element = "replace-me";
	const Footer = children(document.createElement('footer'),
		children(document.createElement('div'),
			document.createElement(dummy_image_element),
			document.createElement('h2'),
		),

		children(document.createElement('ul'),
			[
				"Twitter",
				"Contact Number",
				"Location",
			].map((detail_name,	i) => {
				const Detail = children(document.createElement('li'),
					children(document.createElement('div'),
						document.createElement(dummy_image_element),
						document.createElement('span'),
					),

					document.createElement('p'),
				);

				Detail.classList.add('Detail');
				Detail.setAttribute('data-index', i);

				Detail.querySelector('div > span').classList.add('DetailName');
				Detail.querySelector('div > span').innerText = `${detail_name}: `;

				Detail.querySelector('p').classList.add('Details');

				return Detail;
			}),
		),
	);

	Footer.classList.add('Footer');
	Footer.querySelector('h2').innerText = "Restaurant Odin";
	
	{
		const temp = Footer.querySelector(`.Detail[data-index="0"]`);
		temp.querySelector('.Details').innerText = "@resto-odin-unofficial";

		const image = new Image();
		image.setAttribute('src', Twitter);
		image.setAttribute('alt', "A brand icon from the website formerly called Twitter.");

		const dummy_element = temp.querySelector(`${dummy_image_element}`);
		replace_node(dummy_element, image);
	}
	{
		const temp = Footer.querySelector(`.Detail[data-index="1"]`);
		temp.querySelector('.Details').innerText = "(+00)973 786 6346 (09-RESTO-ODIN)";

		const image = new Image();
		image.setAttribute('src', Phone);
		image.setAttribute('alt', "A phone icon.");

		const dummy_element = temp.querySelector(`${dummy_image_element}`);
		replace_node(dummy_element, image);
	}
	{
		const temp = Footer.querySelector(`.Detail[data-index="2"]`);
		temp.querySelector('.Details').innerText = "Olympus, Land of the Demigods";

		const image = new Image();
		image.setAttribute('src', MapPin);
		image.setAttribute('alt', "An icon signifying a pinned location in a map.");

		const dummy_element = temp.querySelector(`${dummy_image_element}`);
		replace_node(dummy_element, image);
	}

	return Footer;
}


export const Footer = init_footer_element();

export default {
	Footer,
};
