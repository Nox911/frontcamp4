export interface NewsModel {
    id?: number;
    author: string;
    title: string;
    description?: string;
    urlToImage: string;
    url: string;
    publishedAt?: string;
}
