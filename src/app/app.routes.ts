// app.routes.ts
import { Routes } from '@angular/router';
import { Login} from './login/login';
import { Register } from './register/register';
import { DashboardPasien } from './dashboard-pasien/dashboard-pasien';

export const routes: Routes = [
    { path: 'login', component: Login },
    { path: 'register', component: Register },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'dashboard-pasien', component: DashboardPasien },
    { path: '**', redirectTo: '/dashboard-pasien' }
];