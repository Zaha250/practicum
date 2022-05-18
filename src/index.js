import sum from './modules/sum';

const rootEl = document.querySelector('#root');

rootEl.textContent = sum(1, 11).toString();