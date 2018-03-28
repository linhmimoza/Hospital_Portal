import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNewsComponent } from './news.component';

describe('NewsComponent', () => {
  let component: AdminNewsComponent;
  let fixture: ComponentFixture<AdminNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
