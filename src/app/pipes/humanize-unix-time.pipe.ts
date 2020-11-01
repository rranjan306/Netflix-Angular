import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'humanizeUnixTime'
})
export class HumanizeUnixTimePipe implements PipeTransform {

  transform(value: number): any {
    if(!value) {
    	return value;
    }

    return new Date(value * 1000).toLocaleTimeString();
  }
}
