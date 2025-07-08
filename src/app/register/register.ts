import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Diperlukan untuk direktif Angular seperti *ngIf
import { FormsModule } from '@angular/forms'; // Diperlukan untuk [(ngModel)]

// Angular Material Modules
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core'; // Tambahkan ini jika Anda berencana menggunakan Reactive Forms nanti

@Component({
  selector: 'app-register',
  templateUrl: './register.html',
  styleUrls: ['./register.css'],
  // DAFTARKAN SEMUA MODUL DI SINI:
  standalone: true, // Ini menunjukkan bahwa komponen ini adalah komponen standalone
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatNativeDateModule,
    MatDatepickerModule,
    ReactiveFormsModule, // Opsional, tambahkan jika Anda menggunakannya
  ]
})
export class Register {
  username: string = '';
  email: string = '';
  password: string = '';
  mobileNumber: String = '';
  tanggalLahir: String = '';

  constructor() { }

  register(): void {
    // Implementasikan logika registrasi Anda di sini
    console.log('Mendaftarkan pengguna:', this.username, this.email, this.password, this.mobileNumber, this.tanggalLahir);
    // Panggil layanan otentikasi Anda untuk menangani pendaftaran
  }
}