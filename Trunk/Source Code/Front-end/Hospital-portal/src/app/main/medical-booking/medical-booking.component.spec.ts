import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalBookingComponent } from './medical-booking.component';

describe('MedicalBookingComponent', () => {
  let component: MedicalBookingComponent;
  let fixture: ComponentFixture<MedicalBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
