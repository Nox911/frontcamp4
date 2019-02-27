import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';

import { ContentComponent, ActionsPanelComponent, NewsListComponent, NewsItemComponent } from '../index';

describe('ContentComponent', () => {
  let component: ContentComponent;
  let fixture: ComponentFixture<ContentComponent>;
  let el: HTMLDivElement;
  const initialNewsTitle = 'GOOGLE-NEWS';
  const bbcNewsSource = 'bbc-news';
  const bbcNewsTitle = 'BBC-NEWS';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [ ContentComponent, ActionsPanelComponent, NewsListComponent, NewsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display initial news source title', () => {
    el = fixture.debugElement.query(By.css('.app-content-title')).nativeElement;
    expect(el.textContent).toEqual(initialNewsTitle);
    console.log(el.textContent);
  });

  it('should display initial news source title', () => {
    component.setNewsSource(bbcNewsSource);
    fixture.detectChanges();
    el = fixture.debugElement.query(By.css('.app-content-title')).nativeElement;
    expect(el.textContent).toEqual(bbcNewsTitle);
  });
});
