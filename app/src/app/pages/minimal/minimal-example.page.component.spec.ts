import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinimalExamplePageComponent } from './minimal.page.component';

describe('MinimalExamplePageComponent', () => {
	let component: MinimalExamplePageComponent;
	let fixture: ComponentFixture<MinimalExamplePageComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [MinimalExamplePageComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(MinimalExamplePageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
