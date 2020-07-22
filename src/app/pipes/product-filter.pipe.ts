import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: Product[], name: string): Product[] {
    if (!name || !value) {
      return value;
    }
    return value.filter((x: Product) => x.name.toLowerCase().trim().indexOf(name.toLowerCase().trim()) !== -1);
  }

}
