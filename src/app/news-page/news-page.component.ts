import {Component, OnInit} from '@angular/core';
import {NewsService} from '../news.service';

export interface OneNews {
  headLine: string;
  headLineImg?: {
    source: string,
    description: string
  };
  content: string;
  id: number;
  dateOfCreation: number;
  contentImgs?: { source: string, description: string }[];
}

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.css']
})
export class NewsPageComponent implements OnInit {

  news: OneNews[] = [];
  searchCar = '';

  homeOneNews: OneNews;
  oneNewsId: number;


  constructor(private newsService: NewsService) {}


  ngOnInit() {
    if (this.newsService.news.length === 0 ) {

      this.newsService.assignNewsToService()
        .subscribe((data) => {
            console.log('data: ', data);
            this.assignNewsFromServiceToThisComponent();
          },
          (err) => {
            console.log('error: ', err);
          },
          () => {
            console.log('completed in ngOnInit');
          }
        );
    } else {
      this.assignNewsFromServiceToThisComponent();
    }
  }

  loadNewsInNewsService() {
    this.newsService.assignNewsToService();
  }

  assignNewsFromServiceToThisComponent() {
    for (let i = 0; i < this.newsService.news.length; i++) {
      this.news.push(Object.assign({}, this.newsService.news[i]));
    }
  }

  showNews() {
    console.log(this.news);
  }

  loadNews() {
    this.newsService
      .getNews()
      .subscribe((news: OneNews[]) => {
          for (let i = 0; i < news.length; i++) {
            this.news.push(Object.assign({}, news[i]));
          }
        },
        (err) => {
          console.log('error: ', err)
        },
        () => {
          console.log('completed')
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

  consoleLogNewsPageComponent() {
    console.log(this.news);
  }

//
// addCar () {
//   this.carsService
//     .addCar(this.carName)
//     .subscribe( (car: Cars) => {
//       this.news.push(car);
//     });
//   this.carName = '';
// }
//
// getRandColor() {
//   const num = Math.round(Math.random() * (this.colors.length - 1) );
//   return this.colors[num];
// }
//
// setNewColor(car: Cars) {
//   this.carsService.changeColor(car, this.getRandColor() )
//     .subscribe((data) => {
//       console.log(data);
//     });
// }
//
// deleteCar(car: Cars) {
//   this.carsService.deleteCar(car )
//     .subscribe((data) => {
//       this.news = this.news.filter(c => c.id !== car.id);
//     });
// }

}
