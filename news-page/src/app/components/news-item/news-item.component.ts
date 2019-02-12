import { Component, OnInit, Input } from '@angular/core';

import { NewsModel } from '../../models/news.model';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent implements OnInit {

  @Input() newsItem: NewsModel[];

  constructor() { }

  ngOnInit() {
  }

  onEdit(id: number) {
    console.log(`go to edit page of news with id:${id}`);
  }

  onDelete(id) {
    console.log(`news with id:${id} deleting...`);
  }
}
