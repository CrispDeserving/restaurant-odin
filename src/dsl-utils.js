export function children(root, ...children) {
	if (children.length === 0 || children == null) return root;

	return children.reduce((acc, el) => {
		acc.appendChild(el);
		return acc;
	}, root);
}

export function replace_node(dummy_element, replacement_element) {
	const parent = dummy_element.parentNode;

	parent.insertBefore(replacement_element, dummy_element);
	parent.removeChild(dummy_element);
}

export default {
	children,
	replace_node,
};
