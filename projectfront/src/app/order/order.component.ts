import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  products=this.cartService.getProducts();
  name='';
  surename='';
  address='';
  card_number='';

  logged: boolean=false;
  constructor(private cartService: CartService,
              private location: Location) { }

  ngOnInit(): void {

  }
  onSubmit():void{
    this.name='';
    this.surename='';
    this.address='';
    this.card_number='';
    this.products=this.cartService.clearItems();
    window.alert('Your order has been submitted');
    // this.location.back();

  }


}
