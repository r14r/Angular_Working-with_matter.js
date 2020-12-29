import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatapultPageComponent } from './page.component.;

describe('CatapultPageComponent', () => {
  let component: CatapultPageComponent;
  let fixture: ComponentFixture<CatapultPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatapultPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatapultPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
