const fetchProxy = new Proxy(fetch, {
    apply: function(target, thisArg, argumentsList) {
        console.log(
            `Request to URL:'${
                argumentsList[0]
            }' with next parameters: ${JSON.stringify(argumentsList[1])}`
        );

        return target.apply(thisArg, argumentsList);
    },
});

export class NewsFactory {
    constructor(options = {}) {
        this.options = options;
    }

    async get(url) {
        return await fetchProxy(url, {
            method: 'GET',
            ...this.options,
        });
    }

    async find(url, search) {
        return (response = await fetchProxy(url, {
            method: 'POST',
            body: JSON.stringify({ q: search }),
            ...this.options,
        }));
    }
}

import ImageNotFound from './../../img/no_image_found.png';
import { renderNewsList, renderErrorMessage } from './../news/news.controller';

let news = new NewsFactory();

export async function getNews(source) {
    try {
        const response = await news.get(
            `https://newsapi.org/v1/articles?source=${source}&apiKey=8d9cd797251f4fc4a24f983a029f67cc`
        );
        if (response.status !== 200) {
            const errorResponse = await response.json();

            throw new Error(errorResponse.message);
        }
        const data = await response.json();
        if (data.status === 'error' && !data.articles) {
            throw new Error(`Error : ${data.message}`);
        }
        renderNewsList(prepareData(data.articles));
    } catch (err) {
        renderErrorMessage();
        import('./../modal/modal.controller.js').then(modalController =>
            modalController.renderModal(err.message)
        );
        console.log(err.message);
    }
}

function prepareData(articles) {
    return articles.map(article => {
        return {
            title: article.title || '',
            description: article.description || '',
            urlToImage: article.urlToImage || ImageNotFound,
            url: article.url || '',
        };
    });
}
