import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MixedShapesPageComponent } from './page.component.;

describe('MixedShapesPageComponent', () => {
	let component: MixedShapesPageComponent;
	let fixture: ComponentFixture<MixedShapesPageComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [MixedShapesPageComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(MixedShapesPageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
