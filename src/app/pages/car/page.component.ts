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
	selector: "app-car-page",
	templateUrl: "./page.component.html",
	styleUrls: ["./page.component.scss"],
})
export class CarPageComponent implements OnInit, OnDestroy {
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
		World.add(world, [
			// walls
			Bodies.rectangle(400, 0, 800, 50, { isStatic: true }),
			Bodies.rectangle(400, 600, 800, 50, { isStatic: true }),
			Bodies.rectangle(800, 300, 50, 600, { isStatic: true }),
			Bodies.rectangle(0, 300, 50, 600, { isStatic: true }),
		]);

		let scale = 0.9;
		World.add(
			world,
			Composites.car(150, 100, 150 * scale, 30 * scale, 30 * scale)
		);

		scale = 0.8;
		World.add(
			world,
			Composites.car(350, 300, 150 * scale, 30 * scale, 30 * scale)
		);

		World.add(world, [
			Bodies.rectangle(200, 150, 400, 20, {
				isStatic: true,
				angle: Math.PI * 0.06,
			}),
			Bodies.rectangle(500, 350, 650, 20, {
				isStatic: true,
				angle: -Math.PI * 0.06,
			}),
			Bodies.rectangle(300, 560, 600, 20, {
				isStatic: true,
				angle: Math.PI * 0.04,
			}),
		]);

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
			min: { x: 0, y: 0 },
			max: { x: 800, y: 600 },
		});
	}
}
