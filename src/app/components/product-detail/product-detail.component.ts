import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductApiService } from 'src/app/services/product-api.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  id: number;
  productDetail: Product;
  constructor(
    private route: ActivatedRoute, private api: ProductApiService, private router: Router) {
    if (this.router.getCurrentNavigation().extras.state) { this.productDetail = this.router.getCurrentNavigation().extras.state.data; }
  }

  ngOnInit(): void {
    if (this.productDetail) {
      this.id = Number(this.route.snapshot.paramMap.get('id'));
      this.getDetailProduct();
    }
  }
  getDetailProduct(): void {
    this.api.getDetail(this.id).subscribe((product: Product) => {
      this.productDetail = product;
    });
  }
}
