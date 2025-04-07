import { clsx } from "clsx";
import { createElement } from "../utils/dom.js";

export function createButton(attrs = {}, children = []) {
  const button = createElement(
    "button",
    { ...attrs, class: clsx(attrs.class, "button") },
    children,
  );
  return button;
}
