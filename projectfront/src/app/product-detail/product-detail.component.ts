import { Component, OnInit } from '@angular/core';
import { CategoryService } from "../category.service";
import { Category } from "../category";
import { Product } from "../models";
import {ActivatedRoute, Router} from "@angular/router";
import {CartService} from "../cart.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product !: Product;

  constructor(private categoryService: CategoryService,
              private route: ActivatedRoute,
              public router: Router,
              private cartService: CartService,
              ) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(){
    this.route.paramMap.subscribe((params) => {
      const id = parseInt(params.get('p_id') || '{}');
      this.categoryService.getProduct(id).subscribe((data) => {
        this.product = data;
      })
    })
  }

  addToCart(product: Product){
    this.cartService.addToCart(product);
  }

}

