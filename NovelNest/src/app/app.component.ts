import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from './services/cart.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'NovelNest';
  cartItemCount: number = 0;
  username: string | null = null;
  welcomeMessageVisible = false;

  constructor(
    private cartService: CartService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cartService.cartItemCount$.subscribe(count => {
      this.cartItemCount = count;
    });

    this.username = this.authService.getUsername();

    /* if (this.username) {
      setTimeout(() => {
        this.username = null;  
      }, 3000);
    } */
  }

  goToCart(): void {
    this.router.navigate(['/cart']);
  }

  logout(): void {
    this.authService.logout();
    this.username = null;
    this.router.navigate(['/login']);
  }
}
