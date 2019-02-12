import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-actions-panel',
  templateUrl: './actions-panel.component.html',
  styleUrls: ['./actions-panel.component.scss']
})
export class ActionsPanelComponent implements OnInit {
  @Output() newsSource = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  setNewsSource(event: any) {
    this.newsSource.emit(event.target.value);
  }

  filterNews(query: string) {
    console.log(query);
  }

}
