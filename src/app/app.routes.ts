// app.routes.ts
import { Routes } from '@angular/router';
import { Login} from './login/login';
import { Register } from './register/register';
import { Dashboardpatient } from './dashboardpatient/dashboardpatient';

export const routes: Routes = [
    { path: 'login', component: Login },
    { path: 'register', component: Register },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'dashboardpatient', component: Dashboardpatient },
];