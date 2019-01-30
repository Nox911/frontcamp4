function errorHandler(err, req, res, next) {
    console.error('error', err.message);

    res.status(500).render('error', {
        title: 'Something went wrong!',
        error: err.message,
    });
}

module.exports = errorHandler;
