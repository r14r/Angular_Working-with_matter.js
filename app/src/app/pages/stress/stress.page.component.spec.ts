import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StressPageComponent } from './stress-page.component';

describe('StressPageComponent', () => {
  let component: StressPageComponent;
  let fixture: ComponentFixture<StressPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StressPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StressPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
