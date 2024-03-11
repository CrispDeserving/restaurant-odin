export function children(root, ...children) {
	if (children.length === 0 || children == null) return root;

	return children.reduce((acc, el) => {
		acc.appendChild(el);
		return acc;
	}, root);
}

export default {
	children,
};
