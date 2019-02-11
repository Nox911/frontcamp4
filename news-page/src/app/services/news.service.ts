import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { NewsModel } from '../models/news.model';


@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private baseUrl = 'http://localhost:3000/news';
  currentProductList: NewsModel[];

  constructor(private http: HttpClient) { }

  getNews(): Observable<NewsModel[]> {
    return this.http
        .get<any>('https://newsapi.org/v1/articles?source=google-news&apiKey=8d9cd797251f4fc4a24f983a029f67cc')
            .pipe(
                map(news => this.parseData(news.articles))
            );
  }

  private parseData(newsList: NewsModel[]) {
    return newsList.map((newsItem: NewsModel) => {
      return {
        title: newsItem.title || 'no title',
        description: newsItem.description || 'no description',
        urlToImage: newsItem.urlToImage || null,
        url: newsItem.url || null,
      };
    });
  }
}
