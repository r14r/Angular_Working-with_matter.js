import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BallPoolPageComponent } from './page.component.;

describe('BallPoolPageComponent', () => {
  let component: BallPoolPageComponent;
  let fixture: ComponentFixture<BallPoolPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BallPoolPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BallPoolPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
