import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChainsPageComponent } from './page.component.;

describe('ChainsPageComponent', () => {
  let component: ChainsPageComponent;
  let fixture: ComponentFixture<ChainsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChainsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChainsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
