import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './components/content/content.component';
import { NewsDetailComponent } from './components/news-detail/news-detail.component';
import { NewsFormComponent } from './components/news-form/news-form.component';

const routes: Routes = [
  {
      path: 'news',
      component: ContentComponent
  },
  {
      path: 'news/create',
      component: NewsFormComponent
  },
  {
    path: 'news/edit/:id',
    component: NewsFormComponent
  },
  {
      path: 'news/:id',
      component: NewsDetailComponent
  },
  {
    path: '**',
      redirectTo: '/news',
      pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
