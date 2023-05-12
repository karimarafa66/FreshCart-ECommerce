import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

  products:any[] = []
  searchTerm:string = ""




  constructor(
    private _AuthService: AuthService,
    private _Router: Router,
    private _ProductsService: ProductsService
  ) {}

  ngOnInit(): void {
    this._ProductsService.getAllProducts().subscribe({
      next: (response) => {
        console.log(response.data);
        this.products = response.data;
      },
    });
  }
}
