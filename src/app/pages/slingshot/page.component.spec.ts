import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlingshotPageComponent } from './page.component.;

describe('SlingshotPageComponent', () => {
  let component: SlingshotPageComponent;
  let fixture: ComponentFixture<SlingshotPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlingshotPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlingshotPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
