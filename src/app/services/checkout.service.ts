import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  baseUrl: string = 'https://route-ecommerce-app.vercel.app/api/v1/';
  constructor(private _HttpClient: HttpClient) {}

  checkout(shippingAddress:any,cartId:string): Observable<any> {
    return this._HttpClient.post(
      this.baseUrl +
        `orders/checkout-session/${cartId}?url=http://localhost:4200`,
      {
        shippingAddress: shippingAddress
      },
      {
        headers: {
          token: localStorage.getItem('token') || '',
        },
      }
    );
  }
}
