import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashboardpatient } from './dashboardpatient';

describe('Dashboardpatient', () => {
  let component: Dashboardpatient;
  let fixture: ComponentFixture<Dashboardpatient>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dashboardpatient]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dashboardpatient);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
