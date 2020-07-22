import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  isLoading = false;
  productList: Product[] = [];
  name: string = '';
  constructor(private api: ProductService) { }

  ngOnInit(): void {
    this.getProduct();
  }
  async getProduct(): Promise<void> {
    this.isLoading = true;
    const res = await this.api.getProduct();
    try {
      if (res.status === 200) {
        this.productList = res.parsedBody;
      }
    } catch (error) {

    } finally {
      this.isLoading = false;
    }

  }

  openWindows(link: string): void {
    const w = 600;
    const h = 400;
    const left = Number((screen.width / 2) - (w / 2));
    const tops = Number((screen.height / 2) - (h / 2));
    window.open(link, 'show', 'resizable = no, width = ' + w + ', height = ' + h + ', top = ' + tops + ', left = '
      + left);
  }
}
