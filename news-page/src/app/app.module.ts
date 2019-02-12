import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NewsListComponent } from './components/news-list/news-list.component';
import { NewsItemComponent } from './components/news-item/news-item.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ActionsPanelComponent } from './components/actions-panel/actions-panel.component';
import { NewsInterceptor } from './core/interceptors/http.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewsListComponent,
    NewsItemComponent,
    ContentComponent,
    FooterComponent,
    ActionsPanelComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NewsInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
