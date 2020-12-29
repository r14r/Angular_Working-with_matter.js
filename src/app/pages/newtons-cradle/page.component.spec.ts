import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewtonsCradlePageComponent } from './page.component.;

describe('NewtonsCradlePageComponent', () => {
  let component: NewtonsCradlePageComponent;
  let fixture: ComponentFixture<NewtonsCradlePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewtonsCradlePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewtonsCradlePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
