import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosterNewsComponent } from './poster-news.component';

describe('PosterNewsComponent', () => {
  let component: PosterNewsComponent;
  let fixture: ComponentFixture<PosterNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosterNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosterNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});