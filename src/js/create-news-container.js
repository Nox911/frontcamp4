import ImageNotFound from '../img/no_image_found.png';

// we need to find IE for replace display: flex to display: block
// because we are using flex-direction: column, but IE doesn't support this property correctly

const browser = window.navigator.userAgent.toLowerCase();
const isIE = /trident/gi.test(browser) || /msie/gi.test(browser);

export function addElementToMainContainer(type, data) {
    const mainContainer = document.getElementById('main-container');
    if (type === 'news') {
        const preparedData = prepareData(data);
        mainContainer.appendChild(createNewsListContainer(preparedData));
    } else {
        mainContainer.appendChild(createErrorMessageContainer());
    }
}

function createNewsListContainer(newsData) {
    const listContainer = document.createElement('div');

    listContainer.setAttribute('class', 'news-list-container');
    newsData.map(newsItem => {
        listContainer.appendChild(createNewsItemContainer(newsItem));
    });

    return listContainer;
}

function createNewsItemContainer(data) {
    const newsItemTemplate = document.createElement('div');
    newsItemTemplate.setAttribute('class', 'news-item-container');
    if (isIE) newsItemTemplate.classList.add('ie-is-pain');
    newsItemTemplate.innerHTML = `<img class="news-image" src="${
        data.urlToImage
    }" alt="${data.title}">
        <h4 class="news-title">${data.title}</h4>
        <p class="news-description">${data.description}</p>
        <a class="news-link" href="${data.url}">read more ...</a>`;

    return newsItemTemplate;
}

function createErrorMessageContainer() {
    const errorTemplate = document.createElement('div');
    errorTemplate.innerHTML = `<h2 class="error-message">Sorry, something went wrong;( Maybe choose another news portal</h2>`;

    return errorTemplate;
}

function prepareData(data) {
    return data.map(item => {
        return {
            title: item.title || '',
            description: item.description || '',
            urlToImage: item.urlToImage || ImageNotFound,
            url: item.url || '',
        };
    });
}
