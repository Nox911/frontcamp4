// we need to find IE for replace display: flex to display: block
// because we are using flex-direction: column, but IE doesn't support this property correctly

const browser = window.navigator.userAgent.toLowerCase();
const isIE = /trident/gi.test(browser) || /msie/gi.test(browser);

const navListContainer = document.getElementById('nav-list');
navListContainer.addEventListener('click', onNavClick);

function onNavClick(element) {
    const source = element.target.getAttribute('data-source');

    navToggle(element.target);
    getNews(source);
}

function navToggle(element) {
    document.querySelector('.nav-item.active').classList.remove('active');
    element.classList.add('active');
}

async function getNews(source = 'google-news') {
    try {
        const response = await fetch(
            `https://newsapi.org/v1/articles?source=${source}&apiKey=8d9cd797251f4fc4a24f983a029f67cc`
        );
        if (response.status !== 200) {
            throw new Error(
                `Error : ${response.statusText}, status: ${response.status}`
            );
        }
        const data = await response.json();
        if (data.status === 'error' && !data.articles) {
            throw new Error(`Error : ${data.message}`);
        }
        clearMainContainer();
        addElementToMainContainer('news', data.articles);
    } catch (err) {
        clearMainContainer();
        addElementToMainContainer('error');
        console.log(err.message);
    }
}

const mainContainer = document.getElementById('main-container');

function addElementToMainContainer(type, data) {
    if (type === 'news') {
        const preparedData = prepareData(data);
        mainContainer.appendChild(createNewsListContainer(preparedData));
    } else {
        mainContainer.appendChild(createErrorMessageContainer());
    }
}

function clearMainContainer() {
    if (mainContainer.hasChildNodes) {
        mainContainer.childNodes.forEach(node =>
            node.parentNode.removeChild(node)
        );
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
            urlToImage: item.urlToImage || 'img/no_image_found.png',
            url: item.url || '',
        };
    });
}

// get News Page at first page loading
getNews();
