import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: Book[] = [];
  private cartItemCount = new BehaviorSubject<number>(0);
  cartItemCount$ = this.cartItemCount.asObservable();

  addToCart(book: Book): void {
    this.cartItems.push(book);
    this.updateCartCount();
  }

  getCartItems(): Book[] {
    return this.cartItems;
  }

  removeFromCart(book: Book): void {
    const index = this.cartItems.indexOf(book);
    if (index > -1) {
      this.cartItems.splice(index, 1);
      this.updateCartCount();
    }
  }

  clearCart(): void {
    this.cartItems = [];
    this.updateCartCount();
  }

  private updateCartCount(): void {
    this.cartItemCount.next(this.cartItems.length);
  }
}
