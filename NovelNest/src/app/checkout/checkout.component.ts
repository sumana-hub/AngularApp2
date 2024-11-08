import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cartItems: any[] = [];
  total: number = 0;
  purchaseCompleted: boolean = false; 

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.total = this.cartItems.reduce((sum, item) => sum + item.price, 0);
  }

  completePurchase(): void {
    this.cartService.clearCart();
    this.purchaseCompleted = true; 

    setTimeout(() => {
      this.router.navigate(['/catalog']);
    }, 2000); 
  }

  purchaseDetails = {
    name: '',
    address: '',
    payment: ''
  };
}
