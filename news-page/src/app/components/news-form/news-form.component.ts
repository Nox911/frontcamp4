import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.scss']
})
export class NewsFormComponent implements OnInit, OnDestroy {
  newsSubscription: Subscription;

  isEditNews = false;

  idControl: FormControl = new FormControl({value: '', disabled: true});
  authorControl: FormControl = new FormControl('', Validators.required);
  titleControl: FormControl = new FormControl('', Validators.required);
  descriptionControl: FormControl = new FormControl();
  urlControl: FormControl = new FormControl('', Validators.required);
  urlToImageControl: FormControl = new FormControl('', Validators.required);

  newsFormGroup: FormGroup = new FormGroup({
    id: this.idControl,
    author: this.authorControl,
    title: this.titleControl,
    description: this.descriptionControl,
    url: this.urlControl,
    urlToImage: this.urlToImageControl,
  });

  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.newsSubscription = this.route.url
      .pipe(
        map(url => url.pop()),
        switchMap(urlLastSegment => {
          if (urlLastSegment.path !== 'create') {
            this.isEditNews = true;

            return this.newsService.getNewsById(+urlLastSegment);
          }
          return of({
            id: null,
            author: '',
            title: '',
            description: '',
            url: '',
            urlToImage: ''
          });
        })
      ).subscribe((newsItem) => {
        this.idControl.setValue(newsItem.id);
        this.authorControl.setValue(newsItem.author);
        this.titleControl.setValue(newsItem.title);
        this.descriptionControl.setValue(newsItem.description);
        this.urlControl.setValue(newsItem.url);
        this.urlToImageControl.setValue(newsItem.urlToImage);
      });
  }

  ngOnDestroy() {
    this.newsSubscription.unsubscribe();
  }

  onSubmit() {
    this.isEditNews
    ? this.newsService.updateNews(this.newsFormGroup.value)
    : this.newsService.createNews(this.newsFormGroup.value);

    this.router.navigate(['/news']);
  }
}
