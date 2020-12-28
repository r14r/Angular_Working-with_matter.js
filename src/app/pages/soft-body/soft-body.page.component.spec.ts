import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftBodyPageComponent } from './soft-body-page.component';

describe('SoftBodyPageComponent', () => {
  let component: SoftBodyPageComponent;
  let fixture: ComponentFixture<SoftBodyPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftBodyPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftBodyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
