import { Component, Input } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product:any;
  constructor(private _ProductsService: ProductsService){

  }

  addProductToCart(productId:string){
    this._ProductsService.addProductToCart(productId).subscribe({
      next:(response)=> {
        console.log(response);
      }
    })
  }
}
