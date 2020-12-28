import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrictionPageComponent } from './friction-page.component';

describe('FrictionPageComponent', () => {
  let component: FrictionPageComponent;
  let fixture: ComponentFixture<FrictionPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrictionPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrictionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
