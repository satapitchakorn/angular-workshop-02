import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[] = []
  constructor() { }

  ngOnInit(): void {
    this.generate();
  }
  generate(): void {
    const p1 = new Product('C01', 'Product01', 'https://image.com', 10.0, '*', true);
    const p2 = new Product('C02', 'Product01', 'https://image.com', 10.750, '**', true);
    const p3 = new Product('C03', 'Product01', 'https://image.com', 10.0, '***', true);
    const p4 = new Product('C04', 'Product01', 'https://image.com', 10.0, '****', true);
    const p5 = new Product('C05', 'Product01', 'https://image.com', 10.0, '*****', true);

    this.productList.push(p1, p2, p3, p4, p5)
  }
}
