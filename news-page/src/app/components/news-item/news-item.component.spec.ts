import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { NewsItemComponent } from './news-item.component';

describe('NewsItemComponent', () => {
  let component: NewsItemComponent;
  let fixture: ComponentFixture<NewsItemComponent>;

  const mockNewsItem = {
    id: 2,
    author: 'Nox',
    title: 'Bitcoin Approaches $3,600 Again as Top Cryptocurrencies See Gains',
    description: 'Bitcoin (BTC) is hovering near $3,600 again, according to Coin360 data.',
    // tslint:disable-next-line:max-line-length
    urlToImage: 'https://s.yimg.com/uu/api/res/1.2/3kO5xSCdp_BGbpCRJs2nQw--~B/aD00OTQ7dz03NDA7c209MTthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en-US/cointelegraph_667/98cecdffd4a9d789109b068328f5f14a',
    url: 'https://www.businessinsider.com/martin-lewis-drops-lawsuit-against-facebook-over-bitcoin-scam-ads-2019-1',
    publishedAt: '2019-01-23T11:24:00Z',
    content: 'As 2019 throws off the cobwebs of early January',
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [ NewsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsItemComponent);
    component = fixture.componentInstance;
    component.newsItem = mockNewsItem;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
