import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { range, Observable } from 'rxjs';
import { Product, AuthToken } from './models';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products : Product[]=[];
  BASE_URL="http://127.0.0.1:8000/"

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
  login(username:string,password:string):Observable<AuthToken>{
    return this.http.post<AuthToken>(`${this.BASE_URL}api/login/`,{
      username:username,
      password:password
    })
  }
}
