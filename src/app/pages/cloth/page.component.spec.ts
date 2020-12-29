import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothPageComponent } from './page.component.;

describe('ClothPageComponent', () => {
  let component: ClothPageComponent;
  let fixture: ComponentFixture<ClothPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClothPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClothPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
