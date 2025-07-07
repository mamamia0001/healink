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
  // Properti untuk menyimpan nilai dari input field
  username: string = '';
  password: string = '';

  constructor() { }

  // Metode yang akan dipanggil saat tombol login diklik
  login(): void {
    console.log('Username:', this.username);
    console.log('Password:', this.password);

    // TODO: Di sini Anda akan menambahkan logika otentikasi sebenarnya.
    // Contoh: Memanggil service otentikasi, mengirim data ke backend, dll.
    if (this.username === 'user' && this.password === 'pass') {
      alert('Login Berhasil!'); // Ganti dengan navigasi ke dashboard
      // Contoh navigasi (Anda perlu menginjeksi Router di constructor)
      // this.router.navigate(['/dashboard']);
    } else {
      alert('Username atau Password salah!');
    }
  }
}