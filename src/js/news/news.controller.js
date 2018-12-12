import { getNewsListTemplate, getErrorTemplate } from './news.view';

const mainContainer = document.getElementById('main-container');

export function renderNewsList(articles) {
    clearMainContainer();
    mainContainer.appendChild(getNewsListTemplate(articles));
}

export function renderErrorMessage() {
    clearMainContainer();
    mainContainer.appendChild(getErrorTemplate());
}

function clearMainContainer() {
    if (mainContainer.hasChildNodes) {
        Array.from(mainContainer.childNodes).forEach(node =>
            node.parentNode.removeChild(node)
        );
    }
}
