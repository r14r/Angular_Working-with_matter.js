import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollisionFilteringPageComponent } from './page.component.;

describe('CollisionFilteringPageComponent', () => {
  let component: CollisionFilteringPageComponent;
  let fixture: ComponentFixture<CollisionFilteringPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollisionFilteringPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollisionFilteringPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
