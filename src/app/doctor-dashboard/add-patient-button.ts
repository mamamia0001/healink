import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'add-patient-button',
  standalone: true,
  templateUrl: './add-patient-button.html',
  styleUrls: ['./add-patient-button.css'],
})
export class AddPatientButton {
  @Output() add = new EventEmitter<void>();

  onClick() {
    this.add.emit();
  }
}
