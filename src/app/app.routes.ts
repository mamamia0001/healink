import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Register } from './register/register';
import { Dashboard } from './doctor-dashboard/dashboard';
import { PatientDetail } from './doctor-dashboard/patient-detail';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'dashboard', component: Dashboard },
  { path: 'patient/:id', component: PatientDetail },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];