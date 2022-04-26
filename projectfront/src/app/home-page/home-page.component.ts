import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../category';
import { CategoryService } from '../category.service';
import { ProductService } from '../product.service';
import { Product } from '../models';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  categories: Category[]=[];

  category: Category | null = null;

  products: Product[]=[];

  constructor(
    private catServies: CategoryService,
    private route: ActivatedRoute,
    private prServies: ProductService,
    ) { }

  ngOnInit(): void {

  }

  getCategories(){
    this.catServies.getCategories().subscribe((data)=>{
    this.categories=data;
    })
  }

  // getProducts(){
  //   this.prServies.getProducts().subscribe((data) =>{
  //     this.products = data;
  //   })
  // }

}
