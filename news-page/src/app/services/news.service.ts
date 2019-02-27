import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { NewsModel } from '../models/news.model';
import { mockNews } from '../core/mock-news';


@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private ownNewsSource = 'myNews';
  currentProductList: NewsModel[];

  constructor(private http: HttpClient) { }

  getNews(newsSource: string): Observable<NewsModel[]> {
    if (newsSource === this.ownNewsSource) {
      return of(mockNews)
        .pipe(
          map(newsList => this.parseData(newsList, true))
        );
    } else {
        return this.http
          .get<any>(`https://newsapi.org/v1/articles?source=${newsSource}&apiKey=8d9cd797251f4fc4a24f983a029f67cc`)
              .pipe(
                  map(resp => this.parseData(resp.articles, false))
              );
    }

  }

  getNewsById(id: number): Observable<NewsModel> {
    return this.getNews(this.ownNewsSource)
      .pipe(
        map(newsList => newsList.filter(newsItem => newsItem.id === id)[0])
        );
  }

  updateNews(data): void {
    console.log('News updated:');
    console.log(data);
  }

  createNews(data): void {
    console.log('News Created:');
    console.log(data);
  }

  deleteNews(id: number): void {
    console.log(`news with id:${id} deleting...`);
  }

  private parseData(newsList: NewsModel[], isOwnNewsSource) {
    return newsList.map((newsItem: NewsModel, index) => {
      return {
        id: isOwnNewsSource ? index : null,
        author: newsItem.author || 'no author',
        title: newsItem.title || 'no title',
        description: newsItem.description || 'no description',
        urlToImage: newsItem.urlToImage || null,
        url: newsItem.url || null,
        publishedAt: newsItem.publishedAt || null
      };
    });
  }
}
