let navListContainer = document.getElementById('nav-list');
navListContainer.addEventListener('click', onNavClick);

function onNavClick(element) {
	let source = element.target.getAttribute('data-source');

	navToggle(element.target);
	getNews(source);
}

function getNews(source = 'google-news') {
	fetch(
		`https://newsapi.org/v1/articles?source=${source}&apiKey=8d9cd797251f4fc4a24f983a029f67cc`
	)
		.then(response => {
			if (response.status !== 200) {
				clearMainContainer();
				addElementToMainContainer('error');
				console.log(
					'Looks like there was a problem. Status Code: ' + response.status
				);

				return;
			}
			response.json().then(newsDataJson => {
				clearMainContainer();
				addElementToMainContainer('news', newsDataJson['articles']);
			});
		})
		.catch(err => {
			clearMainContainer();
			addElementToMainContainer('error');
			console.log('Fetch Error :-S', err);
		});
}

function createNewsListContainer(newsData) {
	let newsListContainer = document.createElement('div');
	newsListContainer.setAttribute('id', 'news-list-container');
	newsListContainer.setAttribute('class', 'news-list-container');
	newsData.map(newsItem => {
		newsListContainer.appendChild(newsItemContainerFactory(newsItem));
	});

	return newsListContainer;
}

function addElementToMainContainer(type, data) {
	let mainContainer = document.getElementById('main-container');
	let element;

	element =
		type === 'news'
			? createNewsListContainer(data)
			: createErrorMessageContainer();
	mainContainer.appendChild(element);
}

function clearMainContainer() {
	let mainContainer = document.getElementById('main-container');

	if (mainContainer.hasChildNodes) {
		mainContainer.childNodes.forEach(node => node.remove());
	}
}

function newsItemContainerFactory(data) {
	let newsItemContainer = document.createElement('div');
	newsItemContainer.setAttribute('class', 'news-item-container');
	let itemTitle = `<h4 class="news-title">${data.title}</h4>`;
	let newsImage = `<img class="news-image" src="${data.urlToImage}" alt="${
		data.title
	}">`;
	let readMore = `<a class="news-link" href="${data.url}">read more ...</a>`;
	let itemDescription = `<p class="news-description">${data.description}</p>`;
	newsItemContainer.innerHTML =
		newsImage + itemTitle + itemDescription + readMore;

	return newsItemContainer;
}

function createErrorMessageContainer() {
	let errorMessageContainer = document.createElement('div');
	errorMessageContainer.innerHTML = `<h2 class="error-message">Sorry, something went wrong;( Maybe choose another news portal</h2>`;

	return errorMessageContainer;
}

function navToggle(element) {
	if (!element.classList.contains('active')) {
		let navItems = document.getElementsByClassName('nav-item');
		for (let item of navItems) {
			if (item.classList.contains('active')) {
				item.classList.remove('active');
			}
		}
		element.classList.add('active');
	}
}

// get News Page at page load
getNews();
