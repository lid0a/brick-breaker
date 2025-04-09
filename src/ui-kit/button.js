import { createElement } from "../utils/dom.js";
import { cx } from "../utils/helpers.js";

export function createButton(attrs = {}, children = []) {
	const button = createElement(
		"button",
		{ ...attrs, class: cx(attrs.class, "button") },
		children,
	);
	return button;
}
