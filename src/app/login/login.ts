// src/app/login/login.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Diperlukan untuk direktif umum Angular (misal *ngIf, *ngFor)
import { FormsModule } from '@angular/forms'; // Diperlukan untuk two-way data binding (ngModel)
import { MatIconModule } from '@angular/material/icon'; // Untuk ikon Material Design
import { RouterModule } from '@angular/router'; // Untuk routerLink di HTML

@Component({
  selector: 'app-login', // Selector yang akan digunakan di app.component.html (misal: <app-login></app-login>)
  standalone: true, // Ini menandakan bahwa komponen ini adalah standalone
  imports: [
    CommonModule,
    FormsModule, // Penting! Untuk menggunakan [(ngModel)] pada input
    MatIconModule, // Import modul ikon Material
    RouterModule // Import modul router untuk routerLink
  ],
  templateUrl: './login.html', // Menunjuk ke file HTML
  styleUrls: ['./login.css'] // Menunjuk ke file CSS
})
export class Login {
  email: string = '';
  password: string = '';
  rememberMe: boolean = false;

  login() {
    if (this.email && this.password) {
      alert(`Email: ${this.email}\nPassword: ${this.password}\nRemember me: ${this.rememberMe}`);
      // Di sini kamu bisa tambahkan logika autentikasi jika backend sudah ada
    } else {
      alert('Please enter both email and password.');
    }
  }
}
