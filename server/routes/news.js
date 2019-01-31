const express = require('express');
const router = express.Router();

const baseURL = '/api/news';

let logger = require('../public/js/logger');

const {
    getAllNews,
    getSingleNews,
    updateNews,
    createNews,
    deleteNews,
} = require('../public/js/newsService');

// Get all news
router.get(`${baseURL}`, function(req, res) {
    requestLog(req);
    getAllNews().then(data => res.status(200).json(data));
});

// Get single news by Id
router.get(`${baseURL}/:id`, function(req, res) {
    requestLog(req);
    const newsId = req.params.id;
    const data = getSingleNews(newsId);
    res.status(200).json(data);
});

// Create a new news
router.post(`${baseURL}`, function(req, res) {
    requestLog(req);
    const dataContent = req.body;
    const data = createNews(dataContent);
    res.status(200).json(data);
});

// Update a news with Id
router.put(`${baseURL}/:id`, function(req, res) {
    requestLog(req);
    const dataId = req.params.id;
    const dataContent = req.body;
    const data = updateNews(dataId, dataContent);
    res.status(200).json(data);
});

// Delete news by Id
router.delete(`${baseURL}/:id`, function(req, res) {
    requestLog(req);
    const id = req.params.id;
    const data = deleteNews(id);
    res.status(200).json(data);
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
