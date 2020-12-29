import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpritesPageComponent } from './page.component.;

describe('SpritesPageComponent', () => {
  let component: SpritesPageComponent;
  let fixture: ComponentFixture<SpritesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpritesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpritesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
