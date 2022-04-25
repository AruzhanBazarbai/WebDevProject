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
  
  checkOutForm=this.formBuilder.group({ 
    name:'',
    surename:'',
    address: '',
    card_number:''
  });

  logged: boolean=false;
  constructor(private formBuilder: FormBuilder,
              private cartService: CartService) { }

  ngOnInit(): void {

  }
  onSubmit():void{
    this.products=this.cartService.clearItems();
    console.warn('Your order has been submitted',this.checkOutForm.value);
    this.checkOutForm.reset();
  }


}
