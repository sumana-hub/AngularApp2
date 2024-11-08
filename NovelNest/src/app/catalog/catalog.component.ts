import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../models/book.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookService, private cartService: CartService) {}

  ngOnInit(): void {
    this.books = this.bookService.getBooks();
  }

  addToCart(book: Book): void {
    this.cartService.addToCart(book);
  }
}
