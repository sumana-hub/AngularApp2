import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems: Book[] = []; 
  constructor(private cartService: CartService, private router: Router) {}

  proceedToCheckout(): void {
    this.router.navigate(['/checkout']);
  }
  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }
  removeFromCart(book: Book): void {
    this.cartService.removeFromCart(book);
    this.cartItems = this.cartService.getCartItems();
  }
  getTotal(): number {
    return this.cartService.getCartItems().reduce((total, item) => total + item.price, 0);
  }
  
}
