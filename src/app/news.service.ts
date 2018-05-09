import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {OneNews} from './news-page/news-page.component';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class NewsService {
  constructor(private http: Http) {
  }

  news = [];

  getNews() {
    return this.http.get('http://localhost:3000/news')
      .map((response: Response) => response.json());
  }

  assignNewsToService() {
    const ourNewsObservable = Observable.create((observer) =>  {
      this.getNews()
        .subscribe((news: OneNews[]) => {
            for (let i = 0; i < news.length; i++) {
              this.news.push(Object.assign({}, news[i]));
            }
            observer.next(this.news);
          },
          (err) => {
            console.log('error: ', err);
          },
          () => {
            console.log('completed');
            return this.news;
          }
        );
    });

    return ourNewsObservable;
  }

  consoleLogNewFromNewsService() {
    console.log(this.news);
  }

  addCar(oneNewsHeadline: string) {
    const data = {
      name: oneNewsHeadline,
      color: 'black'
    };
    return this.http.post('http://localhost:3000/news', data)
      .map((response: Response) => response.json());
  }

  changeColor(oneNews, color: string) {
    oneNews.color = color;
    return this.http.put(`http://localhost:3000/news/${oneNews.id}`, oneNews)
      .map((response: Response) => response.json());
  }

  deleteOneNews(oneNews: any) {
    return this.http.delete(`http://localhost:3000/news/${oneNews.id}`)
      .map((response: Response) => response.json());
  }

}
