import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-news-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.scss']
})
export class NewsFormComponent implements OnInit {
  newsId: Observable<Params>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.newsId = this.route.url
      .pipe(
        map(url => url.pop())
      );
  }

}
