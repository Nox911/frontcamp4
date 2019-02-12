import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {
  newsId: Observable<Params>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.newsId = this.route.url
      .pipe(
        map(url => url.pop())
      );
  }

}
