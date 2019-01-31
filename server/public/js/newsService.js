// const news = require('../../news/news.json');

let News = require('../../models/news');

const getAllNews = () => {
    return News.find();
};

const getSingleNews = id => {
    if (!news.articles[id]) {
        throw new Error('Article not found for this path');
    }

    return { articles: [news.articles[id]] };
};

const updateNews = (id, data) => {
    if (!news.articles[id]) {
        throw new Error('Article not found for this path');
    }
    news.articles[id] = { ...data };

    return news;
};

const createNews = data => {
    news.articles.push(data);

    return news;
};

const deleteNews = id => {
    if (!news.articles[id]) {
        throw new Error('Article not found for this path');
    }
    news.articles.splice(id, 1);

    return news;
};

module.exports = {
    getAllNews,
    getSingleNews,
    updateNews,
    createNews,
    deleteNews,
};
