import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrandsComponent } from './Components/brands/brands.component';
import { CartComponent } from './Components/cart/cart.component';
import { CategoriesComponent } from './Components/categories/categories.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { ProductsComponent } from './Components/products/products.component';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ProductComponent } from './Components/product/product.component';
import { SeemorePipe } from './pipes/seemore.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { CheckoutComponent } from './Components/checkout/checkout.component';
import { AllOrdersComponent } from './Components/all-orders/all-orders.component';
import { MainsliderComponent } from './Components/mainslider/mainslider.component';
import { CatsliderComponent } from './Components/catslider/catslider.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule  } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HeaderInterceptor } from './header.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    BrandsComponent,
    CartComponent,
    CategoriesComponent,
    FooterComponent,
    HomeComponent,
    NavbarComponent,
    NotfoundComponent,
    ProductsComponent,
    RegisterComponent,
    LoginComponent,
    ProductComponent,
    ProductDetailsComponent,
    SeemorePipe,
    SearchPipe,
    CheckoutComponent,
    AllOrdersComponent,
    MainsliderComponent,
    CatsliderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HeaderInterceptor,
    multi: true

  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
