import { Component } from '@angular/core';
import{ActivatedRoute} from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { Pipe, PipeTransform } from '@angular/core';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  productId:string = "";
  productDetails:any;

  constructor(private _ActivatedRoute: ActivatedRoute,private _ProductsService:ProductsService){


    _ActivatedRoute.params.subscribe((params)=>{
        this.productId=(params['id']);
      _ProductsService.getProductDetails(this.productId).subscribe({
        next:(res)=>{
          console.log(res);

          this.productDetails = res.data;
        }
      })
    })

  }



  addProductToCart(productId:string){
    this._ProductsService.addProductToCart(productId).subscribe({
      next:(response)=> {
        console.log(response);
      }
    })
  }
}
