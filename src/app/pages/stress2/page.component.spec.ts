import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Stress2PageComponent } from './page.component.;

describe('Stress2PageComponent', () => {
  let component: Stress2PageComponent;
  let fixture: ComponentFixture<Stress2PageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Stress2PageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Stress2PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
