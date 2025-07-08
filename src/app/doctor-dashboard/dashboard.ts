import { Component } from '@angular/core';
import { Navbar } from './navbar';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [Navbar],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css'],
})
export class Dashboard {}
