import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerrainPageComponent } from './page.component.;

describe('TerrainPageComponent', () => {
  let component: TerrainPageComponent;
  let fixture: ComponentFixture<TerrainPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerrainPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerrainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
