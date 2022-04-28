import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { CategoryService } from '../category.service';
import { City } from '../models';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
}) 
export class TopBarComponent implements OnInit{

  categories: Category[]=[];
  cities: City[]=[];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
    this.getCities();
  }

  getCategories(){
    this.categoryService.getCategories().subscribe((data)=>{
      this.categories = data;
    });
  }

  getCities(){
    this.categoryService.getCities().subscribe((data)=>{
      this.cities = data;
    })
  }
}
