import { Component, OnInit } from '@angular/core';
import { CategoryService } from "../category.service";
import { Category } from "../category";
import { Product } from "../models";
import {ActivatedRoute, Router} from "@angular/router";
 
@Component({
  selector: 'app-category-product',
  templateUrl: './category-product.component.html',
  styleUrls: ['./category-product.component.css']
})
export class CategoryProductComponent implements OnInit {

  products : Product[] = []

  constructor(private categoryService: CategoryService,
              private route: ActivatedRoute,
              public router: Router) {
    categoryService.apiData$.subscribe(data => this.products = data)
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.route.paramMap.subscribe((params) => {
      const id = parseInt(params.get('id') || '{}');
      this.categoryService.getProducts(id).subscribe((data) => {
        this.products = data;
      })
    })
  }

}

