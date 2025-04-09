import { createElement } from '../utils/dom.js';
import { cx } from '../utils/helpers.js';

export function createDialog(props, attrs = {}, children = []) {
  const closeButton = createElement(
    'button',
    {
      class: 'dialog-close',
      type: 'button',
    },
    ['&times;'],
  );
  closeButton.addEventListener('click', () => {
    dialog.close();
  });
  const title = createElement('h2', { class: 'dialog-title' }, [props.title]);
  const dialog = createElement(
    'dialog',
    { ...attrs, class: cx('dialog', attrs.class) },
    [closeButton, title, ...children],
  );
  return dialog;
}
