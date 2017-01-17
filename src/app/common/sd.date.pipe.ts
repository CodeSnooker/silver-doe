import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'sddate'})
export class SDDatePipe implements PipeTransform {

 private days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
 private months = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  private getDateSuffix(date: number) {
      let suffixValue = 'th';
      
      switch(date) {
          case 1:
          case 21:
          case 31:
            suffixValue = 'st';
            break;
          case 2:
          case 22:
            suffixValue = 'nd';
            break;
          case 3:
          case 23:
            suffixValue = 'rd';
            break;
      }

      return suffixValue;
  }

  transform(value: Date, args: string[]): any {
    if (!value) return value;

    return this.days[value.getDay()] + ', ' + value.getDate() + this.getDateSuffix(value.getDate()) + ' ' + this.months[value.getMonth()] + ' ' + value.getFullYear();
  }
}