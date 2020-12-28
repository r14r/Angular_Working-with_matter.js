import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BroadphasePageComponent } from './broadphase-page.component';

describe('BroadphasePageComponent', () => {
  let component: BroadphasePageComponent;
  let fixture: ComponentFixture<BroadphasePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BroadphasePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BroadphasePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
