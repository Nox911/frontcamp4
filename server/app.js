const express = require('express');
const path = require('path');
const sassMiddleware = require('node-sass-middleware');
const app = express();
const port = 3000;
const newsRouter = require('./routes/news');
const bodyParser = require('body-parser');
const errorMiddleware = require('./public/js/errorMiddleware');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', newsRouter);

app.use(express.static(path.join(__dirname, 'public')));
app.use(
    sassMiddleware({
        src: path.join(__dirname, 'public'),
        dest: path.join(__dirname, 'public'),
        indentedSyntax: false, // true = .sass and false = .scss
        sourceMap: true,
    })
);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(errorMiddleware);

app.listen(port, function(error) {
    if (error) {
        return console.error('Something went wrong!');
    }
    console.log(`Express server is listening on port ${port}!`);
});

module.exports = app;
