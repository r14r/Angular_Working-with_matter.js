import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompositeManipulationPageComponent } from './composite-manipulation-page.component';

describe('CompositeManipulationPageComponent', () => {
  let component: CompositeManipulationPageComponent;
  let fixture: ComponentFixture<CompositeManipulationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompositeManipulationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompositeManipulationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
