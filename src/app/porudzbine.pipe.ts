import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'porudzbine'
})
export class PorudzbinePipe implements PipeTransform {

  transform(value: Object[], anotherValue: string): Object[] {
    if (value == null) {
      return null;
    }
    if (anotherValue !== undefined) {
      return value.filter((item: Object) =>
        item['username'].toLowerCase().indexOf(anotherValue.toLowerCase()) !== -1);
    } else {
      return value;
    }
  }

}
