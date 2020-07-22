import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product';
import { AuthenticationService } from './authentication.service';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  url = environment.apiURL;

  constructor(private http: HttpClient, private api: AuthenticationService) { }
  getAllProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url + '/product/products', {
      headers: { Authorization: this.api.getToken }
    });
  }
}
