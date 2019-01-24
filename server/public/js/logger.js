const { createLogger, format, transports } = require('winston');
const { colorize, combine, printf } = format;

const logFormat = printf(({ url, method, date } = info) => {
    return `${method}: ${url} :: ${date}`;
});

const logger = createLogger({
    format: combine(logFormat, colorize()),
    transports: [
        new transports.Console(),
        new transports.File({ filename: 'request-log.log' }),
    ],
});

module.exports = logger;
