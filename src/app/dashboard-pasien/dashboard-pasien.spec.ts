import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPasien } from './dashboard-pasien';

describe('DashboardPasien', () => {
  let component: DashboardPasien;
  let fixture: ComponentFixture<DashboardPasien>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardPasien]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardPasien);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
