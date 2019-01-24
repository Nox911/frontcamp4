const fs = require('fs');
const express = require('express');
const router = express.Router();
const news = require('../news/news.json');
let logger = require('../public/js/logger');

router.get('/news', function(req, res) {
    requestLog(req);
    fs.readFile('./news/news.json', (err, content) => {
        if (err) {
            return console.error('Error with reading file');
        }
        const parsedNewsJson = JSON.parse(content);
        res.render('index', {
            title: 'News',
            articles: parsedNewsJson.articles,
        });
    });
});

router.get('/news/:id', function(req, res) {
    requestLog(req);
    const articleId = req.params.id;
    if (!news.articles[articleId]) {
        res.render('error', {
            title: 'Something went wrong!',
            error: {
                status: 'Article not found for this path',
                stack: 'Change path or go to home page',
            },
        });
        return console.error('Article not found for this path');
    }
    res.render('index', {
        title: 'News',
        articles: [news.articles[articleId]],
    });
});

router.post('/news', function(req, res) {
    requestLog(req);
    res.status(200).json({ type: req.method });
});

router.post('/news/:id', function(req, res) {
    requestLog(req);
    const articleId = req.params.id;
    res.status(200).json({ type: req.method, id: articleId });
});

router.put('/news/:id', function(req, res) {
    requestLog(req);
    const articleId = req.params.id;
    res.status(200).json({ type: req.method, id: articleId });
});

router.delete('/news/:id', function(req, res) {
    requestLog(req);
    const articleId = req.params.id;
    res.status(200).json({ type: req.method, id: articleId });
});

router.get('/', function(req, res) {
    requestLog(req);
    res.redirect('/news');
});

const requestLog = req => {
    logger.log({
        level: 'info',
        method: req.method,
        url: req.headers.host + req.url,
        date: new Date(),
    });
};

module.exports = router;
