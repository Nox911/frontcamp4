'use strict';

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}

function _asyncToGenerator(fn) {
    return function() {
        var self = this,
            args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(
                    gen,
                    resolve,
                    reject,
                    _next,
                    _throw,
                    'next',
                    value
                );
            }
            function _throw(err) {
                asyncGeneratorStep(
                    gen,
                    resolve,
                    reject,
                    _next,
                    _throw,
                    'throw',
                    err
                );
            }
            _next(undefined);
        });
    };
}

// we need to find IE for replace display: flex to display: block
// because we are using flex-direction: column, but IE doesn't support this property correctly
var browser = window.navigator.userAgent.toLowerCase();
var isIE = /trident/gi.test(browser) || /msie/gi.test(browser);
var navListContainer = document.getElementById('nav-list');
navListContainer.addEventListener('click', onNavClick);

function onNavClick(element) {
    var source = element.target.getAttribute('data-source');
    navToggle(element.target);
    getNews(source);
}

function navToggle(element) {
    document.querySelector('.nav-item.active').classList.remove('active');
    element.classList.add('active');
}

function getNews() {
    return _getNews.apply(this, arguments);
}

function _getNews() {
    _getNews = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee() {
            var source,
                response,
                data,
                _args = arguments;
            return regeneratorRuntime.wrap(
                function _callee$(_context) {
                    while (1) {
                        switch ((_context.prev = _context.next)) {
                            case 0:
                                source =
                                    _args.length > 0 && _args[0] !== undefined
                                        ? _args[0]
                                        : 'google-news';
                                _context.prev = 1;
                                _context.next = 4;
                                return fetch(
                                    'https://newsapi.org/v1/articles?source='.concat(
                                        source,
                                        '&apiKey=8d9cd797251f4fc4a24f983a029f67cc'
                                    )
                                );

                            case 4:
                                response = _context.sent;

                                if (!(response.status !== 200)) {
                                    _context.next = 7;
                                    break;
                                }

                                throw new Error(
                                    'Error : '
                                        .concat(
                                            response.statusText,
                                            ', status: '
                                        )
                                        .concat(response.status)
                                );

                            case 7:
                                _context.next = 9;
                                return response.json();

                            case 9:
                                data = _context.sent;

                                if (
                                    !(data.status === 'error' && !data.articles)
                                ) {
                                    _context.next = 12;
                                    break;
                                }

                                throw new Error(
                                    'Error : '.concat(data.message)
                                );

                            case 12:
                                clearMainContainer();
                                addElementToMainContainer(
                                    'news',
                                    data.articles
                                );
                                _context.next = 21;
                                break;

                            case 16:
                                _context.prev = 16;
                                _context.t0 = _context['catch'](1);
                                clearMainContainer();
                                addElementToMainContainer('error');
                                console.log(_context.t0.message);

                            case 21:
                            case 'end':
                                return _context.stop();
                        }
                    }
                },
                _callee,
                this,
                [[1, 16]]
            );
        })
    );
    return _getNews.apply(this, arguments);
}

var mainContainer = document.getElementById('main-container');

function addElementToMainContainer(type, data) {
    if (type === 'news') {
        var preparedData = prepareData(data);
        mainContainer.appendChild(createNewsListContainer(preparedData));
    } else {
        mainContainer.appendChild(createErrorMessageContainer());
    }
}

function clearMainContainer() {
    if (mainContainer.hasChildNodes) {
        mainContainer.childNodes.forEach(function(node) {
            return node.parentNode.removeChild(node);
        });
    }
}

function createNewsListContainer(newsData) {
    var listContainer = document.createElement('div');
    listContainer.setAttribute('class', 'news-list-container');
    newsData.map(function(newsItem) {
        listContainer.appendChild(createNewsItemContainer(newsItem));
    });
    return listContainer;
}

function createNewsItemContainer(data) {
    var newsItemTemplate = document.createElement('div');
    newsItemTemplate.setAttribute('class', 'news-item-container');
    if (isIE) newsItemTemplate.classList.add('ie-is-pain');
    newsItemTemplate.innerHTML = '<img class="news-image" src="'
        .concat(data.urlToImage, '" alt="')
        .concat(data.title, '">\n        <h4 class="news-title">')
        .concat(data.title, '</h4>\n        <p class="news-description">')
        .concat(data.description, '</p>\n        <a class="news-link" href="')
        .concat(data.url, '">read more ...</a>');
    return newsItemTemplate;
}

function createErrorMessageContainer() {
    var errorTemplate = document.createElement('div');
    errorTemplate.innerHTML =
        '<h2 class="error-message">Sorry, something went wrong;( Maybe choose another news portal</h2>';
    return errorTemplate;
}

function prepareData(data) {
    return data.map(function(item) {
        return {
            title: item.title || '',
            description: item.description || '',
            urlToImage: item.urlToImage || 'img/no_image_found.png',
            url: item.url || '',
        };
    });
} // get News Page at first page loading

getNews();
