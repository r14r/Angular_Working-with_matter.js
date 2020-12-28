import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsPageComponent } from './views-page.component';

describe('ViewsPageComponent', () => {
  let component: ViewsPageComponent;
  let fixture: ComponentFixture<ViewsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
