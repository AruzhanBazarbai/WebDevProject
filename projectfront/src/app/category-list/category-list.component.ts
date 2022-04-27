import { Component, OnInit } from '@angular/core';
import { Category } from "../category";
import { CategoryService } from "../category.service";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories: Category[] = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getCategories()
  }

  getCategories(){
    this.categoryService.getCategories().subscribe((data)=>{
      this.categories = data;
    });
  }

  getProducts(id:any){
    this.categoryService.getProducts(id).subscribe((data)=>{
      this.categoryService.setData(data);
    });
  }

}
