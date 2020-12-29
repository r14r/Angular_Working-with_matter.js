import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimescalePageComponent } from './page.component.;

describe('TimescalePageComponent', () => {
  let component: TimescalePageComponent;
  let fixture: ComponentFixture<TimescalePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimescalePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimescalePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
