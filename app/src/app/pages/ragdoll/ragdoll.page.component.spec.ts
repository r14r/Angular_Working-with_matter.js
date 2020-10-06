import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RagdollPageComponent } from './ragdoll-page.component';

describe('RagdollPageComponent', () => {
  let component: RagdollPageComponent;
  let fixture: ComponentFixture<RagdollPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RagdollPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RagdollPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
