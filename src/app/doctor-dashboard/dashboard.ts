import { Component } from '@angular/core';
import { Navbar } from './navbar';
import { SearchBar } from './search-bar';
import { AddPatientButton } from './add-patient-button';
import { PatientCard } from './patient-card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [Navbar, SearchBar, AddPatientButton, PatientCard],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css'],
})

export class Dashboard {
  patients = [
    {
      name: 'John Doe',
      medicalId: 'MED123',
      birthDate: '1990-05-10',
    },
    {
      name: 'Jane Smith',
      medicalId: 'MED456',
      birthDate: '1985-08-22',
    },
  ];

  constructor(private router: Router) {}

  handleSearch(query: string) {
    console.log('Search:', query);
  }

  handleAddPatient() {
    console.log('Add Patient Clicked');
  }

  viewPatient(patient: any) {
    this.router.navigate(['/patient', patient.medicalId]);
  }
}