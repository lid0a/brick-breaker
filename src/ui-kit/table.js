import { clsx } from "clsx";
import { createElement } from "../utils/dom.js";

export function createTable(attrs, children = []) {
  return createElement(
    "table",
    { ...attrs, class: clsx("table", attrs.class) },
    children,
  );
}

export function createTableHead(attrs, children = []) {
  return createElement("thead", attrs, children);
}

export function createTableBody(attrs, children = []) {
  return createElement("tbody", attrs, children);
}

export function createTableRow(attrs, children = []) {
  return createElement("tr", attrs, children);
}

export function createTableCell(attrs, children = []) {
  return createElement("td", attrs, children);
}

export function createTableHeaderCell(attrs, children = []) {
  return createElement("th", attrs, children);
}
