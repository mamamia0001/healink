import { Routes } from '@angular/router';
import { RoleSelector } from './presentation/auth/role-selector/role-selector';
import { LoginDoctor } from './presentation/auth/login-doctor/login-doctor';
import { LoginPatient } from './presentation/auth/login-patient/login-patient';

export const routes: Routes = [
  { path: '', redirectTo: 'start', pathMatch: 'full' },
  { path: 'start', component: RoleSelector },
  { path: 'auth/login-doctor', component: LoginDoctor },
  { path: 'auth/login-patient', component: LoginPatient },
];
