import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  HeaderComponent,
  NewsListComponent,
  NewsItemComponent,
  ContentComponent,
  FooterComponent,
  ActionsPanelComponent,
  NewsDetailComponent,
  NewsFormComponent
} from './components';

import { NewsInterceptor } from './core/interceptors/http.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewsListComponent,
    NewsItemComponent,
    ContentComponent,
    FooterComponent,
    ActionsPanelComponent,
    NewsDetailComponent,
    NewsFormComponent
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
