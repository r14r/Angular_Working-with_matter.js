import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgPageComponent } from './svg-page.component';

describe('SvgPageComponent', () => {
  let component: SvgPageComponent;
  let fixture: ComponentFixture<SvgPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
