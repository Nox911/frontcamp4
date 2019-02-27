import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-actions-panel',
  templateUrl: './actions-panel.component.html',
  styleUrls: ['./actions-panel.component.scss']
})
export class ActionsPanelComponent {
  @Output() newsSource = new EventEmitter();

  ownNewsSource = false;
  currentNewsSource = 'google-news';

  setNewsSource(event: any) {
    this.currentNewsSource = event.target.value;
    this.newsSource.emit(event.target.value);
  }

  filterNews(query: string) {
    console.log(query);
  }

  isOwnNewsSource() {
    this.ownNewsSource = !this.ownNewsSource;
    if (this.ownNewsSource) {
        this.newsSource.emit('myNews');
      } else {
        if (this.currentNewsSource) {
          this.newsSource.emit(this.currentNewsSource);
        }
      }
  }

}
