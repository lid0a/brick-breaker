export function createElement(tagName, attrs = {}, children = []) {
  const element = document.createElement(tagName);
  for (const [name, value] of Object.entries(attrs)) {
    element.setAttribute(name, value);
  }
  for (const child of children) {
    if (!child) {
      continue;
    }
    if (typeof child === "string") {
      element.innerHTML += child;
    } else {
      element.appendChild(child);
    }
  }
  return element;
}

export function renderDOMElement(element, parent) {
  if (parent) {
    parent.append(element);
  }
}
