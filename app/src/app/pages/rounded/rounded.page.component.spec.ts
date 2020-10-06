import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundedPageComponent } from './rounded-page.component';

describe('RoundedPageComponent', () => {
  let component: RoundedPageComponent;
  let fixture: ComponentFixture<RoundedPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoundedPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
