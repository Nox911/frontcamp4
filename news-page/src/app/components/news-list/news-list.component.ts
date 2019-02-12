import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsModel } from '../../models/news.model';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit, OnChanges {
  @Input() newsSource: string;
  newsList: Observable<NewsModel[]>;

  constructor(
    private newsService: NewsService
  ) { }

  ngOnInit() {
    console.log('hello');
    // this.newsList = this.newsService.getNews(this.newsSource);
  }

  ngOnChanges() {
    this.newsList = this.newsService.getNews(this.newsSource);
  }

}
