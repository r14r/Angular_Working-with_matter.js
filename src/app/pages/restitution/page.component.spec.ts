import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestitutionPageComponent } from './page.component.;

describe('RestitutionPageComponent', () => {
  let component: RestitutionPageComponent;
  let fixture: ComponentFixture<RestitutionPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestitutionPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestitutionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
