import {Component, Injectable, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {NewsService} from '../news.service';
import {NewsPageComponent, OneNews} from '../news-page/news-page.component';
import {el} from "@angular/platform-browser/testing/src/browser_util";

@Component({
  selector: 'app-car-page',
  templateUrl: './one-news-page.component.html',
  styleUrls: ['./one-news-page.component.css'],
  providers: [NewsPageComponent]
})

@Injectable()
export class OneNewsPageComponent implements OnInit {


  currentOnePage: OneNews;
  id: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private newsService: NewsService,
    private newsPageComponent: NewsPageComponent
  ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];

    if (this.newsService.news.length === 0 ) {
      this.newsService.assignNewsToService()
        .subscribe((data) => {
            console.log('data: ', data);
            this.currentOnePage = this.newsService.news[this.id - 1];
          },
          (err) => {
            console.log('error: ', err);
          },
          () => {
            console.log('completed in ngOnInit');
          }
        );
    } else {
      this.currentOnePage = this.newsService.news[this.id - 1];
    }
  }

  showNewsFromNewsPageComponent() {
    this.newsPageComponent.consoleLogNewsPageComponent();
  }
  showNewsFromNewsService() {
    this.newsService.consoleLogNewFromNewsService();
  }
}
