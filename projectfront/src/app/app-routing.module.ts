import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { CategoryListComponent } from "./category-list/category-list.component";
import { CategoryProductComponent } from "./category-product/category-product.component";


const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'cart', component: CartComponent},
  {path: 'order', component: OrderComponent},
  {path: 'categories', component: CategoryListComponent},
  {path: 'categories/:id/products', component: CategoryProductComponent},
  {path: 'categories/:c_id/products/:p_id', component: ProductDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
