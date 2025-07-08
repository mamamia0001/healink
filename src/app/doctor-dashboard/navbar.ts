import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
})
export class Navbar {
  doctorName = 'Dr. Mahendra'; // inget tar ganti, ambil dari backend, dummy nih

  constructor(private router: Router) {}

  logout() {
    // buat bersihin storage/token
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
