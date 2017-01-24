import {Pipe} from '@angular/core';

@Pipe({
  name: 'sdtruncate'
})
export class SDTruncatePipe {
  transform(value: string, args: number) : string {
    value = value ? value : '';
    let limit = args !== undefined ? Math.abs(args) : 60;  
    let trail = '...';
    let nextWhitespace = value.indexOf(' ', limit);
    let response:string = '';
    if (nextWhitespace == -1){
        response = value;
    }
    else if(nextWhitespace < limit + 5) {
        response = value.length > nextWhitespace ? value.substring(0, nextWhitespace) + trail : value;
    }
    else {
        response = value.substring(0, limit) + trail;
    }

    return response;
    
  }
}