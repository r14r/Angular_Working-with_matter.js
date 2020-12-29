import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GyroPageComponent } from './page.component.;

describe('GyroPageComponent', () => {
  let component: GyroPageComponent;
  let fixture: ComponentFixture<GyroPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GyroPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GyroPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
