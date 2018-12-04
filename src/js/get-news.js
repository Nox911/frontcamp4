import { addElementToMainContainer } from './create-news-container';
import { clearMainContainer } from './clear-news-container';

export async function getNews(source = 'google-news') {
    try {
        const response = await fetch(
            `https://newsapi.org/v1/articles?source=${source}&apiKey=8d9cd797251f4fc4a24f983a029f67cc`
        );
        if (response.status !== 200) {
            const errorResponse = await response.json();
            import('./modal-notification').then(modalNotificationModule =>
                modalNotificationModule.openModal(errorResponse)
            );
            throw new Error(
                `Error : ${response.statusText}, status: ${response.status}`
            );
        }
        const data = await response.json();
        if (data.status === 'error' && !data.articles) {
            throw new Error(`Error : ${data.message}`);
        }
        clearMainContainer();
        addElementToMainContainer('news', data.articles);
    } catch (err) {
        clearMainContainer();
        addElementToMainContainer('error');
        console.log(JSON.parse(err.message));
    }
}
