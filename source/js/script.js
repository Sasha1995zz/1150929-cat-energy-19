let menuElem = document.getElementById('sweeties');
let titleElem = menuElem.querySelector('.main-nav__toggle-bar');
titleElem.onclick = function () {
  menuElem.classList.toggle('open');
};
