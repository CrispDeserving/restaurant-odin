import { children, replace_node } from "../dsl-utils";
import MapPin from '../assets/map-pin.svg';
import Phone from '../assets/phone.svg';
import Twitter from '../assets/twitter.svg';
import './style.css';

function init_about_element() {
	const dummy_image_element = "replace-me";
	const About = children(document.createElement('div'),
		document.createElement('h2'),

		children(document.createElement('ul'),
			[
				"Twitter",
				"Contact Number",
				"Location",
			].map((detail_name,	i) => {
				const Detail = children(document.createElement('li'),
					document.createElement(dummy_image_element),

					children(document.createElement('div'),
						document.createElement('p'),
						document.createElement('p'),
					),
				);

				Detail.classList.add('Detail');
				Detail.setAttribute('data-index', i);

				Detail.querySelector('p:nth-child(1)').classList.add('DetailName');
				Detail.querySelector('p:nth-child(1)').innerText = `${detail_name}: `;

				Detail.querySelector('p:nth-child(2)').classList.add('Details');

				return Detail;
			}),
		),
	);

	About.classList.add('About');
	About.querySelector('h2').innerText = "Restaurant Odin";
	
	{
		const temp = About.querySelector(`.Detail[data-index="0"]`);
		temp.querySelector('.Details').innerText = "@resto-odin-unofficial";

		const image = new Image();
		image.setAttribute('src', Twitter);
		image.setAttribute('alt', "A brand icon from the website formerly called Twitter.");

		const dummy_element = temp.querySelector(`${dummy_image_element}`);
		replace_node(dummy_element, image);
	}
	{
		const temp = About.querySelector(`.Detail[data-index="1"]`);
		temp.querySelector('.Details').innerText = "(+00)973 786 6346 (09-RESTO-ODIN)";

		const image = new Image();
		image.setAttribute('src', Phone);
		image.setAttribute('alt', "A phone icon.");

		const dummy_element = temp.querySelector(`${dummy_image_element}`);
		replace_node(dummy_element, image);
	}
	{
		const temp = About.querySelector(`.Detail[data-index="2"]`);
		temp.querySelector('.Details').innerText = "Olympus, Land of the Demigods";
		
		const image = new Image();
		image.setAttribute('src', MapPin);
		image.setAttribute('alt', "An icon signifying a pinned location in a map.");

		const dummy_element = temp.querySelector(`${dummy_image_element}`);
		replace_node(dummy_element, image);
	}

	return About;
}

function init_about_footer_element() {
	const AboutFooter = children(document.createElement('footer'),
		document.createElement('h2'),
		document.createElement('p'),
		document.createElement('p'),
	);
	AboutFooter.classList.add('AboutFooter');

	AboutFooter.querySelector('h2').innerText = "Restaurant Odin";
	AboutFooter.querySelector(':nth-child(1 of p)').innerText = "We're not Hiring...";
	AboutFooter.querySelector(':nth-child(2 of p)').innerText = "But come join us!";

	return AboutFooter;
}


export const About = init_about_element();
export const AboutFooter = init_about_footer_element();

export default {
	About,
	AboutFooter,
};
