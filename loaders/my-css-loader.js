const loaderUtils = require('loader-utils');

module.exports = function(source) {
    const options = loaderUtils.getOptions(this);

    console.log('My custom css loader work!');

    return options.unit ? source.replace(/px/g, options.unit) : source;
};
