import { Component, OnInit } from '@angular/core';
import { CategoryService } from "../category.service";
import { Category } from "../category";
import { Product } from "../models";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-category-product',
  templateUrl: './category-product.component.html',
  styleUrls: ['./category-product.component.css']
})
export class CategoryProductComponent implements OnInit {

  products : Product[] = []
  category !: Category;
  filterState:boolean=false;

  filteredData: Product[]=[];

  data:string="";

  constructor(private categoryService: CategoryService,
              private route: ActivatedRoute,
              public router: Router) { }

  ngOnInit(): void {
    this.getProducts();
    this.getCategory();
  }

  getProducts(){
    this.route.paramMap.subscribe((params) => {
      const id = parseInt(params.get('id') || '{}');
      this.categoryService.getProducts(id).subscribe((data) => {
        this.products = data;
      })
    })
  }
  getCategory(){
    this.route.paramMap.subscribe((params) => {
      const id = parseInt(params.get('id') || '{}');
      this.categoryService.getCategory(id).subscribe((data) => {
        this.category = data;
      })
    })
  }
    filter(){
    // this.getItems();
    // this.albums=this.mainData;
    this.filterState=true;
    this.filteredData=this.products.filter(x=>{
        return x.name.toLowerCase().search(this.data.toLowerCase())!==-1 ;
    });
    this.data='';
    // this.albums=this.filteredData;
  }

}

