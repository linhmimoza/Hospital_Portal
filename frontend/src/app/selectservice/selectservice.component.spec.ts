import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectserviceComponent } from './selectservice.component';

describe('SelectserviceComponent', () => {
  let component: SelectserviceComponent;
  let fixture: ComponentFixture<SelectserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
