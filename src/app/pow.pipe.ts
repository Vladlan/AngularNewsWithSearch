import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: 'appPowPipe'})

export class PowPipe implements PipeTransform {
  transform(value: number, powNum: number = 1, str: string = '') {
    return str + Math.pow(value, powNum);
  }
}
