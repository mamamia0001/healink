import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-doctor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-doctor.html',
  styleUrls: ['./login-doctor.scss'],
})
export class LoginDoctor {
  username = '';
  password = '';

  login() {
    // Placeholder logic, nanti diganti dengan logic sesungguhnya
    console.log('Logging in as doctor', this.username, this.password);
  }
}
