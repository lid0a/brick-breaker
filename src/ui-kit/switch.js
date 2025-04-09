import { createElement } from '../utils/dom.js';

export function createSwitch(props, attrs = {}) {
  const input = createElement('input', {
    ...attrs,
    type: 'checkbox',
  });
  const label = createElement('label', { class: 'switch' }, [
    input,
    props.label,
  ]);
  return label;
}
