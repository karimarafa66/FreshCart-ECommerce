import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { ProductsComponent } from './Components/products/products.component';
import { RegisterComponent } from './Components/register/register.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { CategoriesComponent } from './Components/categories/categories.component';
import { CartComponent } from './Components/cart/cart.component';
import { BrandsComponent } from './Components/brands/brands.component';
import { AuthGuard } from './Guards/auth.guard';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { AllOrdersComponent } from './Components/all-orders/all-orders.component';
import { CheckoutComponent } from './Components/checkout/checkout.component';

const routes: Routes = [
  {path: '', redirectTo:'home',pathMatch: 'full'},
  {path: 'home',canActivate:[AuthGuard], component:HomeComponent},
  {path: "product/:id", component:ProductDetailsComponent},
  {path: 'products', component:ProductsComponent},
  {path: 'login', component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path: 'cart', component:CartComponent},
  {path: 'categories', component:CategoriesComponent},
  {path: 'allOrders', component:AllOrdersComponent},
  {path: 'checkout/:cartId', component:CheckoutComponent},
  {path: 'brands',component:BrandsComponent},
  {path: 'settings', loadChildren: ()=> import('./settings/settings.module').then((m)=>m.SettingsModule ) },
  {path: '**', component:NotfoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
function imports(arg0: string) {
  throw new Error('Function not implemented.');
}

