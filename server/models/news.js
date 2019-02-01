const mongoose = require('mongoose');

// News Schema

const newsSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        description: {
            type: String,
        },
        urlToImage: {
            type: String,
        },
        publishedAt: {
            type: String,
        },
        content: {
            type: String,
        },
        url: {
            type: String,
            required: true,
        },
    },
    {
        collection: 'mocknews',
    }
);

const News = mongoose.model('News', newsSchema);

module.exports = News;
