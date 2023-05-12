import { Component } from '@angular/core';
import { CheckoutService } from './../../services/checkout.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
  cartId: string = '';

  constructor(
    private _CheckoutService: CheckoutService,
    private _ActivatedRoute: ActivatedRoute
  ) {
    _ActivatedRoute.paramMap.subscribe((params) => {
      this.cartId = params.get('cartId')!;
    });
  }

  checkoutForm: FormGroup = new FormGroup({
    details: new FormControl(null),
    phone: new FormControl(null),
    city: new FormControl(null),
  });

  order(checkoutForm: FormGroup) {
    this._CheckoutService
      .checkout(checkoutForm.value, this.cartId)
      .subscribe({
        next: (response: any) => {
          console.log(response.session.url);
          window.location = response.session.url;
        },
      });
  }
}
