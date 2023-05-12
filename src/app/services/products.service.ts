import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  baseUrl: string = 'https://route-ecommerce-app.vercel.app/api/v1/';

  constructor(private _HttpClient: HttpClient) {}

  getAllProducts(): Observable<any> {
    return this._HttpClient.get(this.baseUrl + 'products');
  }

  getProductDetails(productId: string): Observable<any> {
    return this._HttpClient.get(this.baseUrl + `products/${productId}`);
  }

  addProductToCart(productId: string): Observable<any> {
    return this._HttpClient.post(
      this.baseUrl + 'cart',
      {
        productId: productId,
      },
      {
        headers: {
          token: localStorage.getItem('token')!,
        },
      }
    );
  }

  getCartProducts(): Observable<any> {
    return this._HttpClient.get(this.baseUrl + 'cart', {
      headers: {
        token: localStorage.getItem('token')!,
      },
    });
  }

  deleteSpecificProduct(productId: string): Observable<any> {
    return this._HttpClient.delete(this.baseUrl + `cart/${productId}`, {
      headers: {
        token: localStorage.getItem('token')!,
      },
    });
  }
  clearCart(): Observable<any> {
    return this._HttpClient.delete(this.baseUrl + `cart`, {
      headers: {
        token: localStorage.getItem('token')!,
      },
    });
  }

  updateProductCount(productId: string, count: number): Observable<any> {
    return this._HttpClient.put(
      this.baseUrl + `cart/${productId}`,
      {
        count: count,
      },
      {
        headers: {
          token: localStorage.getItem('token')!,
        },
      }
    );
  }

  getAllOrders(): Observable<any> {
    return this._HttpClient.get(this.baseUrl + 'orders', {
      headers: {
        token: localStorage.getItem('token')!,
      },
    });
  }

  getBrands():Observable<any> {
    return this._HttpClient.get(this.baseUrl + `brands`)
   }

   getProductCategories():Observable<any> {
    return this._HttpClient.get(this.baseUrl +`categories`)
   }

   getProducts():Observable<any> {
    return this._HttpClient.get(this.baseUrl +'products')
   }


}




