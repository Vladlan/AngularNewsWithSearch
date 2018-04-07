import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CarsService {

  constructor(private http: Http) {
  }

  getCars() {
    const headers = new Headers({'Content-Type': 'text/uri-list'});
    headers.append('authentication', 'hello');
    return this.http.get('http://localhost:30100/cars', {headers: headers})
      .map((response: Response) => response.json())
      .catch((error: Response) => {
        return Observable.throw('Server is not available now');
      });
  }

  addCar(carName: string) {
    const data = {
      name: carName,
      color: 'black'
    };
    return this.http.post('http://localhost:3000/cars', data)
      .map((response: Response) => response.json());
  }

  changeColor(car, color: string) {
    car.color = color;
    return this.http.put(`http://localhost:3000/cars/${car.id}`, car)
      .map((response: Response) => response.json());
  }

  deleteCar(car: any) {
    return this.http.delete(`http://localhost:3000/cars/${car.id}`)
      .map((response: Response) => response.json());
  }
}
