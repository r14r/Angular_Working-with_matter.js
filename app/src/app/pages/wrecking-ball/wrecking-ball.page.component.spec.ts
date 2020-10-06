import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WreckingBallPageComponent } from './wrecking-ball-page.component';

describe('WreckingBallPageComponent', () => {
  let component: WreckingBallPageComponent;
  let fixture: ComponentFixture<WreckingBallPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WreckingBallPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WreckingBallPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
