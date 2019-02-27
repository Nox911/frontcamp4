import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { NewsModel } from '../../models/news.model';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent implements OnInit {

  @Input() newsItem: NewsModel[];

  constructor(private router: Router, private newsService: NewsService) { }

  ngOnInit() {
  }

  onEdit(id: number) {
    this.router.navigate(['news/edit', id]);
  }

  onDelete(id) {
    this.newsService.deleteNews(id);
  }
}
