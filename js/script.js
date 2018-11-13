function getNews(source) {
    fetch(`https://newsapi.org/v1/articles?source=${source}&apiKey=8d9cd797251f4fc4a24f983a029f67cc`)
    .then(response => {
        if (response.status !== 200) {
            clearMainContainer();
            addElementToMainContainer('error');
            console.log('Looks like there was a problem. Status Code: ' + response.status);

            return;
          }
        response.json()
          .then(newsDataJson => {
            clearMainContainer();
            addElementToMainContainer('news', newsDataJson['articles']);
        })
    }) 
    .catch(err => {
        clearMainContainer();
        addElementToMainContainer('error');
        console.log('Fetch Error :-S', err);
      })
}

function createNewsListContainer(newsData) {
    let newsListContainer = document.createElement('div');
    newsListContainer.setAttribute('id', 'news-list-container');
    newsListContainer.setAttribute('class', 'news-list-container');
    newsData.map(newsItem => {
        newsListContainer.appendChild(newsItemContainerFactory(newsItem));
    })

    return newsListContainer;
}

function addElementToMainContainer(type, elementData) {
    let mainContainer = document.getElementById('main-container');
    let element;

    element = type === 'news' ? createNewsListContainer(elementData) : createErrorMessageContainer();
    mainContainer.appendChild(element);
}

function clearMainContainer(container) {
    let mainContainer = document.getElementById('main-container');
    if (mainContainer.hasChildNodes) {
        mainContainer.childNodes.forEach(node => node.remove());
    }
}

function newsItemContainerFactory(data) {
    let container = document.createElement('div');
    container.setAttribute('class', 'news-item-container');
    let itemTitle = `<h4 class="news-title">${data.title}</h4>`;
    let newsImage = `<img class="news-image" src="${data.urlToImage}" alt="${data.title}">`;
    let readMore = `<a class="news-link" href="${data.url}">read more ...</a>`;
    let itemDescription = `<p class="news-description">${data.description}</p>`;
    container.innerHTML = newsImage + itemTitle + itemDescription+ readMore;

    return container;
}

function createErrorMessageContainer() {
    let container = document.createElement('div');
    container.innerHTML = `<h2 class="error-message">Sorry, something went wrong;( Maybe choose another news portal</h2>`

    return container;
}

// default News Page
getNews('google-news');
