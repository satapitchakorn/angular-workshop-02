import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { ProductApiService } from '../../services/product-api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  isLoading = false;
  productList: Product[] = [];
  name = '';
  constructor(private api: ProductService, private productApi: ProductApiService) { }

  ngOnInit(): void {
    this.getProduct();
  }
  // async getProduct(): Promise<void> {
  //   this.isLoading = true;
  //   const res = await this.api.getProduct();
  //   try {
  //     if (res.status === 200) {
  //       this.productList = res.parsedBody;
  //     }
  //   } catch (error) {

  //   } finally {
  //     this.isLoading = false;
  //   }

  // }
  getProduct(): void {
    this.productApi.getAllProduct().subscribe(product => {
      this.productList = product;
    });
  }
  openWindows(link: string): void {
    const w = 600;
    const h = 400;
    const left = Number((screen.width / 2) - (w / 2));
    const tops = Number((screen.height / 2) - (h / 2));
    window.open(link, 'show', 'resizable = no, width = ' + w + ', height = ' + h + ', top = ' + tops + ', left = '
      + left);
  }
  onRatingClicked(message: string): void {
    Swal.fire({
      title: 'Alert',
      text: message,
      icon: 'success'
    });
  }
}
