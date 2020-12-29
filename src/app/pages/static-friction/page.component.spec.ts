import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticFrictionPageComponent } from './page.component.;

describe('StaticFrictionPageComponent', () => {
  let component: StaticFrictionPageComponent;
  let fixture: ComponentFixture<StaticFrictionPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticFrictionPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticFrictionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
