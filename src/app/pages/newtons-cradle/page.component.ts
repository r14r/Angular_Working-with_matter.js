import { Component, OnDestroy, OnInit } from "@angular/core";

import {
	Body,
	Engine,
	Render,
	World,
	Common,
	Composite,
	Bodies,
	Runner,
	Composites,
	Mouse,
	MouseConstraint,
} from "matter-js";

import { HelperService } from "src/app/services/helper.service";

@Component({
	selector: "app-newtons-cradle-page",
	templateUrl: "./page.component.html",
	styleUrls: ["./page.component.scss"],
})
export class NewtonsCradlePageComponent implements OnInit, OnDestroy {
	constructor(private helper: HelperService) {
		this.helper.init(this.constructor.name);
		this.helper.log("constructor");
	}

	ngOnInit() {
		this.demo();
	}

	ngOnDestroy() {
		this.helper.stop();
	}
	demo() {
		this.helper.log("demo");

		const { world, engine, render, width, height } = this.helper.create(
			document.getElementById("container")
		);

		Render.run(render);

		// create runner
		const runner = Runner.create();
		Runner.run(runner, engine);

		// add bodies
		let cradle = Composites.newtonsCradle(280, 100, 5, 30, 200);
		World.add(world, cradle);
		Body.translate(cradle.bodies[0], { x: -180, y: -100 });

		cradle = Composites.newtonsCradle(280, 380, 7, 20, 140);
		World.add(world, cradle);
		Body.translate(cradle.bodies[0], { x: -140, y: -100 });

		// add mouse control
		const mouse = Mouse.create(render.canvas);
		const mouseConstraint = MouseConstraint.create(engine, {
			mouse,
			constraint: {
				stiffness: 0.2,
				render: {
					visible: false,
				},
			},
		});

		World.add(world, mouseConstraint);

		// keep the mouse in sync with rendering
		render.mouse = mouse;

		// fit the render viewport to the scene
		Render.lookAt(render, {
			min: { x: 0, y: 50 },
			max: { x: 800, y: 600 },
		});
	}
}
