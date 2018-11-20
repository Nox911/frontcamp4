const mainContainer = document.getElementById('main-container');

export function addElementToMainContainer(type, data) {
    if (type === 'news') {
        const preparedData = prepareData(data);
        mainContainer.appendChild(createNewsListContainer(preparedData));
    } else {
        mainContainer.appendChild(createErrorMessageContainer());
    }
}

export function clearMainContainer() {
    if (mainContainer.hasChildNodes) {
        mainContainer.childNodes.forEach(node => node.remove());
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
    const newsItemTemplate = document.createElement('template');
    newsItemTemplate.innerHTML = `<div class="news-item-container">
        <img class="news-image" src="${data.urlToImage}" alt="${data.title}">
        <h4 class="news-title">${data.title}</h4>
        <p class="news-description">${data.description}</p>
        <a class="news-link" href="${data.url}">read more ...</a>
    </div>`;

    return newsItemTemplate.content;
}

function createErrorMessageContainer() {
    const errorTemplate = document.createElement('template');
    errorTemplate.innerHTML = `<div>
        <h2 class="error-message">Sorry, something went wrong;( Maybe choose another news portal</h2>
    </div>`;

    return errorTemplate.content;
}

function prepareData(data) {
    return data.map(item => {
        return {
            title: item.title || '',
            description: item.description || '',
            urlToImage: item.urlToImage || 'img/no_image_found.png',
            url: item.url || '',
        };
    });
}
