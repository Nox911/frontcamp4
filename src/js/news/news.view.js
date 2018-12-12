const browser = window.navigator.userAgent.toLowerCase();
const isIE = /trident/gi.test(browser) || /msie/gi.test(browser);

export function getErrorTemplate() {
    const errorTemplate = document.createElement('div');

    errorTemplate.innerHTML = `<h2 class="error-message">Sorry, something went wrong;( Maybe choose another news portal</h2>`;

    return errorTemplate;
}

export function getNewsListTemplate(articles) {
    const newsListTemplate = document.createElement('div');

    newsListTemplate.setAttribute('class', 'news-list-container');

    articles.map(article => {
        newsListTemplate.appendChild(getNewsTemplate(article));
    });

    return newsListTemplate;
}

function getNewsTemplate(article) {
    const newsTemplate = document.createElement('div');

    newsTemplate.setAttribute('class', 'news-item-container');
    if (isIE) newsItemTemplate.classList.add('ie-is-pain');

    const news = `
    <img class="news-image" src="${article.urlToImage}" alt="${article.title}">
    <h4 class="news-title">${article.title}</h4>
    <p class="news-description">${article.description}</p>
    <a class="news-link" href="${article.url}">read more ...</a>`;

    newsTemplate.innerHTML = news;

    return newsTemplate;
}
