import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoublePendulumPageComponent } from './page.component.;

describe('DoublePendulumPageComponent', () => {
  let component: DoublePendulumPageComponent;
  let fixture: ComponentFixture<DoublePendulumPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoublePendulumPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoublePendulumPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
