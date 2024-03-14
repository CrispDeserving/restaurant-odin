import { children } from "../dsl-utils";
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

	Footer.classList.add('Footer');
	Footer.querySelector('h2').innerText = "Restaurant Odin";
	
	{
		const temp = Footer.querySelector(`.Detail[data-index="0"]`);
		temp.querySelector('.Details').innerText = "@resto-odin-unofficial";
	}
	{
		const temp = Footer.querySelector(`.Detail[data-index="1"]`);
		temp.querySelector('.Details').innerText = "(+00)973 786 6346 (09-RESTO-ODIN)";
	}
	{
		const temp = Footer.querySelector(`.Detail[data-index="2"]`);
		temp.querySelector('.Details').innerText = "Olympus, Land of the Demigods";
	}

	return Footer;
}


export const Footer = init_footer_element();

export default {
	Footer,
};
