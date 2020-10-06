import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoundStackPageComponent } from './compound-stack-page.component';

describe('CompoundStackPageComponent', () => {
  let component: CompoundStackPageComponent;
  let fixture: ComponentFixture<CompoundStackPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompoundStackPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompoundStackPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
