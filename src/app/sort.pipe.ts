import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  transform(array: any[], property: string): any[] {
    if (!array || !array.length) {
      return [];
    }

    return array.sort((a, b) => a[property].localeCompare(b[property]));
  }
}
