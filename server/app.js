const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const sassMiddleware = require('node-sass-middleware');
const errorMiddleware = require('./public/js/errorMiddleware');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const newsRouter = require('./routes/news');
const port = 3000;

mongoose.connect(
    'mongodb://127.0.0.1:27017/frontcamp',
    { useNewUrlParser: true }
);
let db = mongoose.connection;

// Check connection
db.once('open', () => console.log('Connected to MongoDB'));

// Check for DB errors
db.on('error', err => console.log(err));

// Init App
const app = express();

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
