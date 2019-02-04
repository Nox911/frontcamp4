let News = require('../../models/news');

const getAllNews = () => {
    return News.find();
};

const getSingleNews = id => {
    return News.findOne({ _id: id });
};

const updateNews = (id, data) => {
    return News.findOneAndUpdate({ _id: id }, { ...data });
};

const createNews = data => {
    const news = new News({ ...data });

    return news.save();
};

const deleteNews = id => {
    return News.findOneAndDelete({ _id: id });
};

const deleteAllNews = () => {
    return News.deleteMany({});
};

const createMockNews = () => {
    return News.insertMany([
        {
            author: 'Isobel Asher Hamilton',
            title:
                "A millionaire who was suing Facebook over scam bitcoin ads has dropped his suit, and now he's fired a warning shot to Google",
            description:
                'British millionaire Martin Lewis will drop his legal case against Facebook over thousands of scam ads on the platform that featured his face. Lewis is best known as the founder of the Money Saving Expert website. As part of its settlement with Lewis, Facebook…',
            url:
                'https://www.businessinsider.com/martin-lewis-drops-lawsuit-against-facebook-over-bitcoin-scam-ads-2019-1',
            urlToImage:
                'https://amp.businessinsider.com/images/5bad1bc9304c384c0f8b4569-1136-568.jpg',
            publishedAt: '2019-01-23T11:37:14Z',
            content:
                'British millionaire Martin Lewis is dropping his lawsuit against Facebook for allowing scam bitcoin adverts featuring his image to spread on the platform. \r\n Lewis and Facebook announced the update at a press conference on Wednesday. \r\n In April 2018 the mill… [+2180 chars]',
        },
        {
            author:
                'Monty Munford, Contributor, Monty Munford, Contributor https://www.forbes.com/sites/montymunford/',
            title:
                'Blockchain-For-Good And Blockchain Innovation Set The Scene For 2019',
            description:
                'After the hype of 2018, blockchain is slowly, but surely, moving into the mainstream. This augurs well for projects in 2019, not least blockchain-for-good.',
            url:
                'https://www.forbes.com/sites/montymunford/2019/01/23/blockchain-for-good-and-blockchain-innovation-set-the-scene-for-2019/',
            urlToImage:
                'https://thumbor.forbes.com/thumbor/600x315/https%3A%2F%2Fblogs-images.forbes.com%2Fmontymunford%2Ffiles%2F2019%2F01%2Fblockchainafrica.jpg',
            publishedAt: '2019-01-23T11:25:00Z',
            content:
                'As 2019 throws off the cobwebs of early January, there are signs that the hype behind blockchain is transmuting into something valuable and important.Last week Forbesreported that the Ford Motor Company had launched a blockchain pilot on IBMs platform to veri… [+9863 chars]',
        },
        {
            author: 'Noximus Prime',
            title:
                'Bitcoin Approaches $3,600 Again as Top Cryptocurrencies See Gains',
            description:
                'Bitcoin (BTC) is hovering near $3,600 again, according to Coin360 data.  At press time, Bitcoin is up just over 1 percent on the day, trading at around $3,603.  Looking at its weekly chart, the current price is just slightly lower than $3,658, the price at wh…',
            url:
                'https://finance.yahoo.com/news/bitcoin-approaches-3-600-again-112400351.html',
            urlToImage:
                'https://s.yimg.com/uu/api/res/1.2/3kO5xSCdp_BGbpCRJs2nQw--~B/aD00OTQ7dz03NDA7c209MTthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en-US/cointelegraph_667/98cecdffd4a9d789109b068328f5f14a',
            publishedAt: '2019-01-23T11:24:00Z',
            content:
                'Wednesday, Jan. 23 most of the top 20 cryptocurrencies are seeing slight to substantial growth on the day to press time. Bitcoin (BTC) is hovering near $3,600 again, according to Coin360 data.\r\nMarket visualization from Coin360\r\nAt press time, Bitcoin is up j… [+1982 chars]',
        },
        {
            author: 'Cointelegraph By Adrian Zmudzinski',
            title:
                'Bitcoin Approaches $3,600 Again as Top Cryptocurrencies See Gains',
            description:
                'Most of the top 20 cryptocurrencies are seeing slight to substantial gains, with Bitcoin hovering just over $3,600.',
            url:
                'https://cointelegraph.com/news/bitcoin-approaches-3-600-again-as-top-cryptocurrencies-see-gains',
            urlToImage:
                'https://images.cointelegraph.com/images/740_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS9zdG9yYWdlL3VwbG9hZHMvdmlldy9lM2Q4NTU1NDBhMGNjMDAwNDlhZWIzZjI3MTlhYTZjZS5qcGc=.jpg',
            publishedAt: '2019-01-23T11:24:00Z',
            content: null,
        },
        {
            author: 'Syed Shoeb',
            title:
                'Bitcoin — a decade of disruption, distribution, digitization, decentralization and decimation',
            description:
                'Bitcoin journey from an abstract concept to being the world’s largest Cryptocurrency. How Bitcoin helped the blockchain tech revolution.',
            url:
                'https://hackernoon.com/bitcoin-a-decade-of-disruption-distribution-digitization-decentralization-and-decimation-42d0b7ddd666',
            urlToImage:
                'https://cdn-images-1.medium.com/max/1200/0*Lnw0xqAu03ekg9Uf',
            publishedAt: '2019-01-23T11:06:01Z',
            content:
                'InWara provides research on ICO and STO projects. In addition to ICOs/STOs, we provide research on Crypto exchanges and their security, private blockchain companies, Hedge Fund, VC, HNI and angel investments in the Blockchain industry and Mergers/Acquisitions… [+4734 chars]',
        },
    ]);
};

module.exports = {
    getAllNews,
    getSingleNews,
    updateNews,
    createNews,
    deleteNews,
    deleteAllNews,
    createMockNews,
};
