import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cartProducts: any = [];
  updateSetTimeOut: any;
  cartId: string = '';
  constructor(private _ProductsService: ProductsService) {}

  ngOnInit(): void {
    this._ProductsService.getCartProducts().subscribe({
      next: (response) => {
        console.log(response);
        this.cartProducts = response.data.products;
        this.cartId = response.data._id;
      },
    });
  }

  getCartProducts() {
    this._ProductsService.getCartProducts().subscribe({
      next: (response) => {
        console.log(response.data.products);
        this.cartProducts = response.data.products;
        this.cartId = response.data._id;
      },
    });
  }

  deleteSpecificProduct(productId: string) {
    this._ProductsService.deleteSpecificProduct(productId).subscribe({
      next: (response) => {
        console.log(response);
        this.cartProducts = response.data.products;
      },
    });
  }

  clearCart() {
    this._ProductsService.clearCart().subscribe({
      next: (response) => {
        console.log(response);
        if (response.message == 'success') {
          this.cartProducts = [];
        }
      },
    });
  }

  updateProductCount(productId: string, count: number) {
    clearTimeout(this.updateSetTimeOut);
    this.updateSetTimeOut = setTimeout(() => {
      if (count == 0) {
        this.deleteSpecificProduct(productId);
      } else {
        this._ProductsService.updateProductCount(productId, count).subscribe({
          next: (response) => {
            console.log(response);
            this.cartProducts = response.data.products;
          },
        });
      }
    }, 500);
  }
}
