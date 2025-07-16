import { Routes } from '@angular/router';

export const routes: Routes = [
    // 1. Rute default: Jika path kosong, arahkan ke halaman login.
    { 
        path: '', 
        redirectTo: 'login', 
        pathMatch: 'full' 
    },

    // 2. Rute untuk halaman-halaman utama aplikasi Anda.
    // Menggunakan loadComponent untuk lazy loading (praktik terbaik untuk standalone component).
    { 
        path: 'login', 
        loadComponent: () => import('./login/login').then(m => m.Login) 
    },
    { 
        path: 'register', 
        loadComponent: () => import('./register/register').then(m => m.Register) 
    },
    { 
        path: 'patientappointment', 
        loadComponent: () => import('./patientappointment/patientappointment').then(m => m.Patientappointment) 
    },

    // 3. Rute Wildcard (Catch-all): HARUS DITEMPATKAN PALING AKHIR.
    // Jika URL tidak cocok dengan rute di atas, arahkan ke halaman login.
    { 
        path: '**', 
        redirectTo: 'login' 
    }
];
