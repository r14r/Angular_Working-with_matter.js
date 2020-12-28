import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcavePageComponent } from './concave-page.component';

describe('ConcavePageComponent', () => {
  let component: ConcavePageComponent;
  let fixture: ComponentFixture<ConcavePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcavePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcavePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
