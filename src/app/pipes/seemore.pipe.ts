import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seemore'
})
export class SeemorePipe implements PipeTransform {

  transform(productDesc: string,count:number): string {
    return productDesc?.split(/\s/).slice(0,count).join(" ");
  }

}
