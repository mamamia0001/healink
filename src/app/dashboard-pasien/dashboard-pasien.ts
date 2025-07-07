import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common'; // Import CommonModule dan DatePipe
import { Router, RouterModule } from '@angular/router'; // Import RouterModule untuk routerLink

@Component({
  selector: 'app-dashboard-pasien',
  standalone: true, // Pastikan ini true jika Anda menggunakan Angular standalone components
  imports: [CommonModule, RouterModule, DatePipe], // Tambahkan CommonModule dan RouterModule ke imports
  templateUrl: './dashboard-pasien.html',
  styleUrl: './dashboard-pasien.css'
})
export class DashboardPasien implements OnInit {

  userName: string = 'Pasien ABC'; // Nama pasien yang akan ditampilkan
  lastVisitDate: Date | null = new Date('2024-06-25T10:00:00'); // Tanggal kunjungan terakhir
  lastDoctor: string = 'Budi Santoso'; // Dokter kunjungan terakhir
  nextAppointmentDate: Date | null = new Date('2024-07-10T14:30:00'); // Tanggal janji temu mendatang
  nextAppointmentDoctor: string = 'Dewi Lestari'; // Dokter janji temu mendatang
  currentMedications: string[] = ['Paracetamol (3x sehari)', 'Vitamin C (1x sehari)']; // Obat yang sedang dikonsumsi

  constructor(private router: Router) { } // Inject Router

  ngOnInit(): void {
    // Di sini Anda bisa memuat data dari API, misalnya:
    // this.loadPatientData();
  }

  // Metode untuk simulasi logout
  logout(): void {
    console.log('User logged out');
    // Logika logout sesungguhnya (misalnya menghapus token, redirect ke halaman login)
    this.router.navigate(['/login']); // Contoh: redirect ke halaman login
  }

  // Contoh metode untuk memuat data (akan diganti dengan panggilan API sesungguhnya)
  loadPatientData(): void {
    // Di sini Anda akan memanggil service untuk mengambil data pasien
    // Misalnya: this.patientService.getPatientDashboardData().subscribe(data => { ... });
  }
}