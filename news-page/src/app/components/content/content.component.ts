import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  newsSource = 'google-news';

  constructor() { }

  ngOnInit() {
  }

  setNewsSource(querySource: string) {
    console.log(querySource);
    this.newsSource = querySource;
  }

}
