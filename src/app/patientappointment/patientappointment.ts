import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-patientappointment',
  standalone: true,
  imports: [CommonModule], // CommonModule diperlukan untuk *ngIf
  templateUrl: './patientappointment.html',
  styleUrls: ['./patientappointment.css']
})
export class Patientappointment { // Pastikan nama class adalah 'PatientAppointment' (huruf 'A' besar)

  // --- SEMUA PROPERTI DAN FUNGSI YANG DIPERLUKAN ADA DI SINI ---

  // Properti untuk menampilkan nama pengguna
  userName: string = 'Jahn Doe';

  // Properti untuk mengontrol tampilan (ada atau tidaknya janji temu)
  hasAppointment: boolean = false;

  constructor() { }

  /**
   * Fungsi ini dipanggil saat tombol 'Create Appointment' diklik.
   */
  createAppointment(): void {
    console.log('Tombol Create Appointment diklik!');
    // Anda bisa menambahkan logika di sini, misalnya:
    // this.hasAppointment = true;
  }

  /**
   * Fungsi ini dipanggil saat tombol 'Log Out' diklik.
   */
  logout(): void {
    console.log('Pengguna log out.');
    // Tambahkan logika logout di sini
  }
}
