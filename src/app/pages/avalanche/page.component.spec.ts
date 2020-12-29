import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvalanchePageComponent } from './page.component.;

describe('AvalanchePageComponent', () => {
  let component: AvalanchePageComponent;
  let fixture: ComponentFixture<AvalanchePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvalanchePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvalanchePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
