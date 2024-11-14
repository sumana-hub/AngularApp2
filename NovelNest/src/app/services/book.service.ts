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
    { id: 15, title: 'The Light We Lost', author: 'Jill Santopolo', price: 16.49, imageUrl: 'assets/images/thelightwelost.jpg' },
    { id: 16, title: 'The Fault in Our Stars', author: 'John Green', price: 16.99, imageUrl: 'assets/images/faultinourstars.jpg' },
    { id: 17, title: 'The Wedding Date', author: 'Jasmine Guillory', price: 14.99, imageUrl: 'assets/images/theweddingdate.jpg' },
    { id: 18, title: 'Red, White & Royal Blue', author: 'Casey McQuiston', price: 18.99, imageUrl: 'assets/images/redwhiteandroyalblue.jpg' },
    { id: 19, title: 'It Ends with Us', author: 'Colleen Hoover', price: 13.99, imageUrl: 'assets/images/itendswithus.jpg' },
    { id: 20, title: 'After', author: 'Anna Todd', price: 15.99, imageUrl: 'assets/images/after.jpg' },
    { id: 21, title: 'Verity', author: 'Colleen Hoover', price: 19.99, imageUrl: 'assets/images/verity.jpg' },
    { id: 22, title: 'The Seven Husbands of Evelyn Hugo', author: 'Taylor Jenkins Reid', price: 16.49, imageUrl: 'assets/images/thesevenhusbands.jpg' },
    { id: 23, title: 'The Sun Is Also a Star', author: 'Nicola Yoon', price: 14.99, imageUrl: 'assets/images/thesun.jpg' },
    { id: 24, title: 'Normal People', author: 'Sally Rooney', price: 17.49, imageUrl: 'assets/images/normalpeople.jpg' },
    { id: 25, title: 'Call Me by Your Name', author: 'André Aciman', price: 15.49, imageUrl: 'assets/images/callme.jpg' }
  ];

  getBooks(page: number, pageSize: number): Book[] {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return this.books.slice(startIndex, endIndex);
  }

  getTotalPages(pageSize: number): number {
    return Math.ceil(this.books.length / pageSize);
  }
}
