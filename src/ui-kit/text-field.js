import { createElement } from '../utils/dom.js';

export function createTextField(props = {}, attrs = {}) {
  const input = createElement('input', { ...attrs, type: 'text' });
  const label = createElement('label', { class: 'text-field' }, [
    props.label,
    input,
  ]);
  return label;
}
