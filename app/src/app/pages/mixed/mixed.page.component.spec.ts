import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MixedPageComponent } from './mixed-page.component';

describe('MixedPageComponent', () => {
  let component: MixedPageComponent;
  let fixture: ComponentFixture<MixedPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MixedPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MixedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
