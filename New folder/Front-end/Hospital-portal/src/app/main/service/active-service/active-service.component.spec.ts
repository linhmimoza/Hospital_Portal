import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveServiceComponent } from './active-service.component';

describe('ActiveServiceComponent', () => {
  let component: ActiveServiceComponent;
  let fixture: ComponentFixture<ActiveServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
