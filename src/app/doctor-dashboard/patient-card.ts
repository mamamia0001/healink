import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'patient-card',
  standalone: true,
  templateUrl: './patient-card.html',
  styleUrls: ['./patient-card.css'],
})
export class PatientCard {
  @Input() name!: string;
  @Input() medicalId!: string;
  @Input() birthDate!: string;

  @Output() view = new EventEmitter<void>();

  onViewRecord() {
    this.view.emit();
  }
}