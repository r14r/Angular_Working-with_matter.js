import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GravityPageComponent } from './gravity-page.component';

describe('GravityPageComponent', () => {
  let component: GravityPageComponent;
  let fixture: ComponentFixture<GravityPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GravityPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GravityPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
