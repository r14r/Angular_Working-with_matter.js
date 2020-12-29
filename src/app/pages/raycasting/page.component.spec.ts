import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaycastingPageComponent } from './page.component.;

describe('RaycastingPageComponent', () => {
  let component: RaycastingPageComponent;
  let fixture: ComponentFixture<RaycastingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaycastingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaycastingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
