import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-patient',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-patient.html',
  styleUrls: ['./login-patient.scss'],
})
export class LoginPatient {
  medicalId = '';

  login() {
    // Placeholder ni untuk backend nanti
    console.log('Patient logging in with Medical ID:', this.medicalId);
  }
}
