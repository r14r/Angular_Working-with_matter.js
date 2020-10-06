import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstraintsPageComponent } from './constraints-page.component';

describe('ConstraintsPageComponent', () => {
  let component: ConstraintsPageComponent;
  let fixture: ComponentFixture<ConstraintsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstraintsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstraintsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
