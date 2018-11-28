import './css/normalize.css';
import './css/style.scss';
import { navToggle } from './js/nav-toggle';
require('es6-promise/auto');

const navListContainer = document.getElementById('nav-list');
navListContainer.addEventListener('click', onNavClick);

function onNavClick(element) {
    const source = element.target.getAttribute('data-source');

    navToggle(element.target);
    import('./js/get-news').then(getNewsModule =>
        getNewsModule.getNews(source)
    );
}
