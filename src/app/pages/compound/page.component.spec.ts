import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoundPageComponent } from './page.component.;

describe('CompoundPageComponent', () => {
  let component: CompoundPageComponent;
  let fixture: ComponentFixture<CompoundPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompoundPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompoundPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
