import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManipulationPageComponent } from './page.component.;

describe('ManipulationPageComponent', () => {
  let component: ManipulationPageComponent;
  let fixture: ComponentFixture<ManipulationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManipulationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManipulationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
