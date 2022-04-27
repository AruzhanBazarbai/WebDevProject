import { Component, OnInit } from '@angular/core';
import { CategoryService } from "../category.service";
import { Category } from "../category";
import { Product } from "../models";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  products : Product[] = [];

  constructor(private categoryService: CategoryService,
              private route: ActivatedRoute,
              public router: Router
              ) {
    categoryService.apiData$.subscribe(data => this.products = data)
  }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(){
    this.route.paramMap.subscribe((params) => {
      const id = parseInt(params.get('id') || '{}');
      this.categoryService.getProducts(id).subscribe((data) => {
        this.products = data;
      })
    })
  }

}

