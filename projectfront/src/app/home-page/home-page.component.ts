import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../category';
import { CategoryService } from '../category.service';
import { ProductService } from '../product.service';
import { Product } from '../models';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  categories: Category[]=[];

  category: Category | null = null;

  products: Product[]=[];

  // filterState:boolean=false;

  // filteredData: Product[]=[];

  // data:string="";

  constructor(
    private catServies: CategoryService,
    private route: ActivatedRoute,
    private prServies: ProductService,
    private cartService: CartService
    ) { }

  ngOnInit(): void {
    this.getCategories();
    this.getProducts();
  }

  getCategories(){
    this.catServies.getCategories().subscribe((data)=>{
      this.categories=data;
    })
  }
  addToCart(product: Product){
    this.cartService.addToCart(product);
  }

  getProducts(){
    this.catServies.getProds().subscribe((data)=>{
      this.products=data;
    })
  }
  // filter(){
  //   // this.getItems();
  //   // this.albums=this.mainData;
  //   this.filterState=true;
  //   this.filteredData=this.products.filter(x=>{
  //       return x.name.search(this.data)!==-1 ;
  //   });
  //   this.data='';
  //   // this.albums=this.filteredData;
  // }
  

}
