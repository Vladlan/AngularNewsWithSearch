import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NewsService} from '../news.service';
import {OneNews} from '../news-page/news-page.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  homeOneNews: OneNews;
  oneNewsId: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private newsService: NewsService
  ) { }


  openNewsPage() {
    this.router.navigate(['news'], {relativeTo: this.route});
  }

  loadNewsInNewsService() {
    this.newsService.assignNewsToService().subscribe((data) => {
        console.log('data: ', data);
      },
      (err) => {
        console.log('error: ', err);
      },
      () => {
        console.log('completed in ngOnInit');
      }
    );
  }

  showNewsFromNewsService() {
    this.newsService.consoleLogNewFromNewsService();
  }

  getOneNewsFromServiceById(id: number) {
    this.homeOneNews = this.newsService.news[+id];
    console.log(this.homeOneNews);
  }

}
