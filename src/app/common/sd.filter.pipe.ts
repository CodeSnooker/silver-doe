import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sdfilter'
})

export class SDFilterPipe implements PipeTransform {
   
    applyFilter(item: any, arg:any) {
        console.log('Item: ', item);
        console.log('Arg: ', arg);
        let anyProblem = true;

        for (let key in arg) {

            anyProblem = (item[key] === arg[key]) ? false: true;
            console.log('Keys are: ', key);
            console.log('Item Value: ', item[key]);
        }

        return anyProblem ? undefined : item;
    }

    transform(items: any[], args: any[]): any {
    if (!items) return items;
    
    return items.filter(item => this.applyFilter(item, args));
  }
}