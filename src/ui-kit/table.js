import { createElement } from '../utils/dom.js';
import { cx } from '../utils/helpers.js';

export function createTable(attrs, children = []) {
  return createElement(
    'table',
    { ...attrs, class: cx('table', attrs.class) },
    children,
  );
}

export function createTableHead(attrs, children = []) {
  return createElement('thead', attrs, children);
}

export function createTableBody(attrs, children = []) {
  return createElement('tbody', attrs, children);
}

export function createTableRow(attrs, children = []) {
  return createElement('tr', attrs, children);
}

export function createTableCell(attrs, children = []) {
  return createElement('td', attrs, children);
}

export function createTableHeaderCell(attrs, children = []) {
  return createElement('th', attrs, children);
}
