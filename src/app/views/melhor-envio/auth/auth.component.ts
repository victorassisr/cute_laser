import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  ngOnInit(): void {
    const url = 'https://sandbox.melhorenvio.com.br/oauth/authorize?client_id=5673&redirect_uri=https%3A%2F%2Fcutelaser.art.br/melhor-envio/auth&response_type=code&state=teste&scope=cart-read%20cart-write%20companies-read%20companies-write%20coupons-read%20coupons-write%20notifications-read%20orders-read%20products-read%20products-write%20purchases-read%20shipping-calculate%20shipping-cancel%20shipping-checkout%20shipping-companies%20shipping-generate%20shipping-preview%20shipping-print%20shipping-share%20shipping-tracking%20ecommerce-shipping%20transactions-read%20users-read%20users-write';
    // window.location.href = url;
  }

}
