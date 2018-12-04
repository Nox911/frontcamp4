import { addElementToMainContainer } from './create-news-container';
import { clearMainContainer } from './clear-news-container';
import { NewsFactory } from './news-factory';

const news = new NewsFactory();

export async function getNews(source = 'google-news') {
    try {
        const response = await news.get(
            `https://newsapi.org/v1/articles?source=${source}&apiKey=8d9cd797251f4fc4a24f983a029f67cc`
        );
        if (response.status !== 200) {
            const errorResponse = await response.json();

            throw new Error(errorResponse.message);
        }
        const data = await response.json();
        if (data.status === 'error' && !data.articles) {
            throw new Error(`Error : ${data.message}`);
        }
        clearMainContainer();
        addElementToMainContainer('news', data.articles);
    } catch (err) {
        import('./modal-notification').then(modalNotificationModule =>
            modalNotificationModule.openModal(err.message)
        );
        clearMainContainer();
        addElementToMainContainer('error');
        console.log(err.message);
    }
}
