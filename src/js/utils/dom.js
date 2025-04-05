export function createElement(tagName, attrs = {}, children = []) {
  const element = document.createElement(tagName);
  for (const [name, value] of Object.entries(attrs)) {
    element.setAttribute(name, value);
  }
  if (typeof children === "string") {
    element.appendChild(document.createTextNode(children));
    return element;
  }
  if (children instanceof Text) {
    element.appendChild(children);
    return element;
  }
  if (children instanceof HTMLElement) {
    element.appendChild(children);
    return element;
  }
  if (Array.isArray(children)) {
    for (const child of children) {
      if (typeof child === "string") {
        element.appendChild(document.createTextNode(child));
      } else if (child instanceof Text) {
        element.appendChild(child);
      } else if (child instanceof HTMLElement) {
        const attributes = {};
        for (let i = 0; i < child.attributes.length; ++i) {
          const { name, value } = child.attributes[i];
          attributes[name] = value;
        }
        const childElement = createElement(child.tagName, attributes, [
          ...child.childNodes,
        ]);
        element.appendChild(childElement);
      }
    }
  }
  return element;
}

export function renderDOMElement(element, parent) {
  if (parent) {
    parent.append(element);
  }
}
