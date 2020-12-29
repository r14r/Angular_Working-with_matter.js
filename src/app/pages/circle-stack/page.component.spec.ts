import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleStackPageComponent } from './page.component.;

describe('CircleStackPageComponent', () => {
  let component: CircleStackPageComponent;
  let fixture: ComponentFixture<CircleStackPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircleStackPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleStackPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
