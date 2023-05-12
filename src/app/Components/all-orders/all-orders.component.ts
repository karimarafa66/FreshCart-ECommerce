import { Component } from '@angular/core';
import { ProductsService } from './../../services/products.service';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css'],
})
export class AllOrdersComponent {
  orders: any[] = [];

  constructor(private _ProductsService: ProductsService) {
    _ProductsService.getAllOrders().subscribe({
      next: (response) => {
        console.log(response);
        this.orders = response.data;
      },
    });
  }
}
