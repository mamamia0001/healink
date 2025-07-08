import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'patient-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './patient-detail.html',
  styleUrls: ['./patient-detail.css'],
})
export class PatientDetail {
  patientId!: string;

  // ini dummy data pasien, inget nanti fetch dari backend
  patient = {
    name: 'John Doe',
    birthDate: '1990-05-10',
    bloodType: 'O+',
    medicalId: 'MED123',
    diagnosis: ['Diabetes', 'Hipertensi'],
    prescription: 'Metformin 500mg',
  };

  constructor(private route: ActivatedRoute) {
    this.patientId = this.route.snapshot.paramMap.get('id') || '';
  }
}