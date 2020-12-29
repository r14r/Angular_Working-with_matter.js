import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PyramidPageComponent } from './page.component.;

describe('PyramidPageComponent', () => {
  let component: PyramidPageComponent;
  let fixture: ComponentFixture<PyramidPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PyramidPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PyramidPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
