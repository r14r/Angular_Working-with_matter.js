import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SleepingPageComponent } from './sleeping-page.component';

describe('SleepingPageComponent', () => {
  let component: SleepingPageComponent;
  let fixture: ComponentFixture<SleepingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SleepingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SleepingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
