import './style.css';
import TVmazeAPI from './commentsClass.js';

const tvmaze = new TVmazeAPI();

let currentPopup = null;

const btns = document.querySelectorAll('button');

btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (currentPopup) {
      currentPopup.classList.add('d-none');
    }
    tvmaze.displayShow(parseInt(btn.id, 10)).then((popupDiv) => {
      currentPopup = popupDiv;
    });
  });
});
