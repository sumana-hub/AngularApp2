import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[] = [
    { id: 1, title: 'Pride and Prejudice', author: 'Jane Austen', price: 15.99, imageUrl: 'assets/images/pride.jpg' },
    { id: 2, title: 'The Notebook', author: 'Nicholas Sparks', price: 17.99, imageUrl: 'assets/images/notebook.jpg' },
    { id: 3, title: 'Me Before You', author: 'Jojo Moyes', price: 14.99, imageUrl: 'assets/images/mebeforeyou.jpg' },
    { id: 4, title: 'Outlander', author: 'Diana Gabaldon', price: 19.99, imageUrl: 'assets/images/outlander.jpg' },
    { id: 5, title: 'The Time Traveler’s Wife', author: 'Audrey Niffenegger', price: 16.99, imageUrl: 'assets/images/timetraveller.jpg' },
    { id: 6, title: 'The Rosie Project', author: 'Graeme Simsion', price: 13.99, imageUrl: 'assets/images/therosie.jpg' },
    { id: 7, title: 'One Day', author: 'David Nicholls', price: 12.99, imageUrl: 'assets/images/oneday.jpg' },
    { id: 8, title: 'A Walk to Remember', author: 'Nicholas Sparks', price: 18.99, imageUrl: 'assets/images/awalk.jpg' },
    { id: 9, title: 'Beautiful Disaster', author: 'Jamie McGuire', price: 15.99, imageUrl: 'assets/images/beautifuldisaster.jpg' },
    { id: 10, title: 'The Hating Game', author: 'Sally Thorne', price: 14.99, imageUrl: 'assets/images/hatinggame.jpg' },
    { id: 11, title: 'Eleanor & Park', author: 'Rainbow Rowell', price: 13.99, imageUrl: 'assets/images/eleanorpark.jpg' },
    { id: 12, title: 'The Kiss Quotient', author: 'Helen Hoang', price: 14.49, imageUrl: 'assets/images/thekissquotient.jpg' },
    { id: 13, title: 'To All the Boys I’ve Loved Before', author: 'Jenny Han', price: 12.99, imageUrl: 'assets/images/toalltheboys.jpg' },
    { id: 14, title: 'Twilight', author: 'Stephenie Meyer', price: 11.99, imageUrl: 'assets/images/twilight.jpg' },
    { id: 15, title: 'The Light We Lost', author: 'Jill Santopolo', price: 16.49, imageUrl: 'assets/images/thelightwelost.jpg' }
  ];

  getBooks(): Book[] {
    return this.books;
  }
}
