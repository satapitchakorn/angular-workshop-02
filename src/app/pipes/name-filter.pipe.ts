import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameFilter'
})
export class NameFilterPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    if (!value) {
      return value;
    }

    return value.toUpperCase().replace(/\s/gm, '-');
  }

}
