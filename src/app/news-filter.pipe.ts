import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'carFilter'
})

export class CarFilterPipe implements PipeTransform {

  transform(newsList, searchStr: string, key: string) {

    if (newsList.length === 0 || searchStr === '') {
      return newsList;
    }

    return newsList.filter((oneNews) => {
        return oneNews[key]
          .toLowerCase()
          .indexOf(searchStr.toLowerCase()) !== -1;
      }
    );
  }
}
