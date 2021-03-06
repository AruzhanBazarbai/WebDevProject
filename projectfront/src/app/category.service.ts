import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './category';
import { City, Product } from './models';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  BASE_URL = 'http://127.0.0.1:8000';
  constructor(private http: HttpClient) { }

  private apiData = new BehaviorSubject<Product[]>([]);
  public apiData$ = this.apiData.asObservable();

  setData(data:any) {
    this.apiData.next(data)
  }

  getCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(`${this.BASE_URL}/api/categories/`);
  }

  getProduct(id:any): Observable<Product>{
    return this.http.get<Product>(`${this.BASE_URL}/api/products/${id}/`);
  }

  getProducts(id:any):Observable<Product[]>{
    return this.http.get<Product[]>(`${this.BASE_URL}/api/categories/${id}/products/`);
  }

  getProds(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.BASE_URL}/api/products/`)
  }

  getCategory(id:any): Observable<Category> {
    return this.http.get<Category>(`${this.BASE_URL}/api/categories/${id}/`);
  }

  getCities(): Observable<City[]>{
    return this.http.get<City[]>(`${this.BASE_URL}/api/cities/`);
  }
}
