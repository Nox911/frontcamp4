const express = require('express');
const router = express.Router();
const errorHandler = require('../public/js/errorMiddleware');

const baseURL = '/api/news';

let logger = require('../public/js/logger');

const {
    getAllNews,
    getSingleNews,
    updateNews,
    createNews,
    deleteNews,
    deleteAllNews,
    createMockNews,
} = require('../public/js/newsService');

// Get all news
router.get(`${baseURL}`, function(req, res) {
    requestLog(req);
    getAllNews()
        .then(data => res.status(200).json(data))
        .catch(err => errorHandler(err, req, res));
});

// Get single news by Id
router.get(`${baseURL}/:id`, function(req, res) {
    requestLog(req);
    const newsId = req.params.id;
    getSingleNews(newsId)
        .then(data => {
            console.log(`News with id: "${data._id}" was successfully found!`);
            res.status(200).json(data);
        })
        .catch(err => errorHandler(err, req, res));
});

// Create a new news
router.post(`${baseURL}`, function(req, res) {
    requestLog(req);
    const dataContent = req.body;
    createNews(dataContent)
        .then(data => {
            console.log(
                `New news with id: "${data._id}" was successfully created!`
            );
            res.status(200).json(data);
        })
        .catch(err => errorHandler(err, req, res));
});

// Update a news with Id
router.put(`${baseURL}/:id`, function(req, res) {
    requestLog(req);
    const newsId = req.params.id;
    const dataContent = req.body;
    updateNews(newsId, dataContent)
        .then(data => {
            console.log(
                `News with id: "${data._id}" was successfully updated!`
            );
            res.status(200).json(data);
        })
        .catch(err => errorHandler(err, req, res));
});

// Delete news by Id
router.delete(`${baseURL}/:id`, function(req, res) {
    requestLog(req);
    const id = req.params.id;
    deleteNews(id)
        .then(data => {
            console.log(
                `News with id: "${data._id}" was successfully deleted!`
            );
            res.status(200).json({});
        })
        .catch(err => errorHandler(err, req, res));
});

// Put to db mockNews
router.post(`${baseURL}/createMockNews`, function(req, res) {
    requestLog(req);
    createMockNews()
        .then(data => res.status(200).json(data))
        .catch(err => errorHandler(err, req, res));
});

// Delete from db all News
router.delete(`${baseURL}`, function(req, res) {
    requestLog(req);
    deleteAllNews()
        .then(data => {
            console.log('All news has been deleted!');
            res.status(200).json(data);
        })
        .catch(err => errorHandler(err, req, res));
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
