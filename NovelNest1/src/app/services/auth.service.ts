import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}

  login(username: string, password: string): boolean {
    // Check if the username and password match
    const storedUsername = localStorage.getItem('user');
    const storedPassword = localStorage.getItem('password');  // You can store the password as well for verification

    if (storedUsername === username && storedPassword === password) {
      return true;
    }

    return false;
  }

  register(username: string, password: string): boolean {
    if (username && password) {
      localStorage.setItem('user', username); // Store the username with the 'user' key
      localStorage.setItem('password', password); // Store the password
      return true;
    }
    return false;
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('user');
  }

  logout(): void {
    localStorage.removeItem('user');
    localStorage.removeItem('password'); // Remove the password as well
  }

  getUsername(): string | null {
    return localStorage.getItem('user');
  }
}
