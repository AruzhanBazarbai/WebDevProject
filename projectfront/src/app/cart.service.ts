import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { range } from 'rxjs';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products : Product[]=[];

  constructor(private http: HttpClient) { }

  addToCart(product: Product){
    this.products.push(product);
  }
  getProducts(){
    return this.products;
  }
  deleteProduct(index: number){
    this.products.splice(index,1);
  }
  clearItems(){
    this.products=[];
    return this.products;
  }
}
