import { Component } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projectfront';
  username='';
  password='';
  logged:boolean=false;
  constructor(private cartService: CartService){
    const token = localStorage.getItem('token');
    if (token) {
      this.logged = true;
    }
  }
  login(){
    this.cartService.login(this.username, this.password).subscribe((data) => {

      localStorage.setItem('token', data.token);

      this.logged = true;
      this.username = '';
      this.password = '';
    });
  }
  logout(){
    this.logged = false;
    localStorage.removeItem('token');
  }
}
