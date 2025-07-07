import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-role-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './role-selector.html',
  styleUrls: ['./role-selector.scss']
})
export class RoleSelector {
  constructor(private router: Router) {}

  selectRole(role: 'doctor' | 'patient') {
  if (role === 'doctor') {
    this.router.navigate(['/auth/login-doctor']);
  } else {
    this.router.navigate(['/auth/login-patient']);
  }
}
}