import { createDialog } from '../ui-kit/dialog.js';
import { createSwitch } from '../ui-kit/switch.js';
import { createElement } from '../utils/dom.js';
import gearIcon from '../assets/icons/gear.svg';
import starIcon from '../assets/icons/star.svg';
import infoIcon from '../assets/icons/info.svg';
import {
  createTable,
  createTableBody,
  createTableHead,
  createTableHeaderCell,
  createTableRow,
} from '../ui-kit/table.js';
import { createTextField } from '../ui-kit/text-field.js';
import { createButton } from '../ui-kit/button.js';

const sidebar = createElement('aside', { class: 'sidebar' }, [
  createElement('h1', {}, ['Brick Breaker']),
  createElement('div', { class: 'sidebar-display' }, [
    createElement('div', { class: 'record', 'data-record': '0' }, ['Record:']),
    createElement('div', { class: 'score', 'data-score': '0' }, ['Score:']),
    createElement('div', { class: 'balls', 'data-balls': '1' }, ['Balls:']),
  ]),
  createElement('ul', { class: 'sidebar-menu' }, [
    createElement(
      'li',
      { class: 'sidebar-menu-item', 'data-item': 'settings' },
      [gearIcon, createElement('span', {}, ['Settings'])],
    ),
    createElement(
      'li',
      { class: 'sidebar-menu-item', 'data-item': 'best-players' },
      [starIcon, createElement('span', {}, ['Best players'])],
    ),
    createElement('li', { class: 'sidebar-menu-item', 'data-item': 'about' }, [
      infoIcon,
      createElement('span', {}, ['About']),
    ]),
  ]),
]);

const settingsDialog = createDialog({ title: 'Settings' }, {}, [
  createElement(
    'div',
    {
      class: 'settings-dialog-content',
    },
    [
      createSwitch({ label: 'Sound' }, { id: 'sound', checked: true }),
      createSwitch({ label: 'Aiming' }, { id: 'aiming', checked: true }),
      createSwitch({ label: 'Dark mode' }, { id: 'dark-mode' }),
    ],
  ),
]);

const bestPlayersDialog = createDialog({ title: 'Best players' }, {}, [
  createTable({}, [
    createTableHead({}, [
      createTableRow({}, [
        createTableHeaderCell({}, ['#']),
        createTableHeaderCell({}, ['Name']),
        createTableHeaderCell({}, ['Score']),
        createTableHeaderCell({}, ['Date']),
      ]),
    ]),
    createTableBody(),
  ]),
]);

const aboutDialog = createDialog({ title: 'About' }, {}, [
  createElement('p', {}, [
    'Created by&nbsp;',
    createElement('a', { href: 'https://github.com/lid0a', target: '_blank' }, [
      'lid0a',
    ]),
    '&nbsp;for the&nbsp;',
    createElement('a', { href: 'https://rs.school', target: '_blank' }, [
      'Rolling Scopes School',
    ]),
  ]),
]);

const gameOverDialog = createDialog(
  { title: 'Game over!' },
  { class: 'game-over-dialog' },
  [
    createElement('div', { 'data-score': 0 }, ['Score:']),
    createButton({ 'data-new-game': true }, ['New game']),
  ],
);

const newRecordDialog = createDialog(
  { title: 'New record!' },
  { class: 'new-record-dialog' },
  [
    createElement('div', { 'data-score': 0 }, ['Score:']),
    createElement('form', {}, [
      createTextField(
        { label: 'Enter your name' },
        { name: 'name', required: true },
      ),
      createButton({ type: 'submit' }, ['Save']),
    ]),
  ],
);

document.body.append(settingsDialog);
document.body.append(bestPlayersDialog);
document.body.append(aboutDialog);
document.body.append(gameOverDialog);
document.body.append(newRecordDialog);
document.querySelector('#app').append(sidebar);

const gameDOMElements = {
  scoreElements: document.querySelectorAll('[data-score]'),
  ballsElement: document.querySelector('.balls'),
  recordElement: document.querySelector('.record'),
  settingsMenuItemElement: document.querySelector("[data-item='settings']"),
  bestPlayersMenuItemElement: document.querySelector(
    "[data-item='best-players']",
  ),
  aboutMenuItemElement: document.querySelector("[data-item='about']"),
  blockBumpSound: new Audio('./public/audio/block-bump.mp3'),
  bonusBumpSound: new Audio('./public/audio/bonus-bump.mp3'),
  newStageSound: new Audio('./public/audio/new-stage.mp3'),
  gameOverSound: new Audio('./public/audio/game-over.mp3'),

  settingsDialog,
  bestPlayersDialog,
  aboutDialog,
  gameOverDialog,
  newRecordDialog,
};

gameDOMElements.gameOverDialog
  .querySelector('button')
  .addEventListener('click', () => {
    gameDOMElements.gameOverDialog.showModal();
  });

gameDOMElements.settingsMenuItemElement.addEventListener('click', () => {
  gameDOMElements.settingsDialog.showModal();
});

gameDOMElements.bestPlayersMenuItemElement.addEventListener('click', () => {
  gameDOMElements.bestPlayersDialog.showModal();
});

gameDOMElements.aboutMenuItemElement.addEventListener('click', () => {
  gameDOMElements.aboutDialog.showModal();
});

export default gameDOMElements;
