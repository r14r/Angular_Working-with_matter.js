import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirFrictionPageComponent } from './page.component.;

describe('AirFrictionPageComponent', () => {
  let component: AirFrictionPageComponent;
  let fixture: ComponentFixture<AirFrictionPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirFrictionPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirFrictionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
