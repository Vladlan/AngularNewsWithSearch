import {Component, Injectable, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {NewsService} from '../news.service';
import {NewsPageComponent, OneNews} from '../news-page/news-page.component';

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

    console.log(this.route);

    this.id = +this.route.snapshot.params['id'];

    this.currentOnePage = this.newsPageComponent.news[this.id];

  }

  showNewsFromNewsPageComponent() {
    this.newsPageComponent.consoleLogNewsPageComponent();
  }
}
