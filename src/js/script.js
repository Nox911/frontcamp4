import { navToggle } from './toggle.js';
import { getNews } from './get-news.js';

const navListContainer = document.getElementById('nav-list');
navListContainer.addEventListener('click', onNavClick);

function onNavClick(element) {
    const source = element.target.getAttribute('data-source');

    navToggle(element.target);
    getNews(source);
}

// get News Page at first page loading
getNews();
