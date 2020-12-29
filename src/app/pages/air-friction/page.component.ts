import { Component, OnDestroy, OnInit } from "@angular/core";

import {
	Body,
	Engine,
	Render,
	World,
	Common,
	Bodies,
	Runner,
	Composites,
	Mouse,
	MouseConstraint,
} from "matter-js";

import { HelperService } from "src/app/services/helper.service";

@Component({
	selector: "app-air-friction-page",
	templateUrl: "./page.component.html",
	styleUrls: ["./page.component.scss"],
})
export class AirFrictionPageComponent implements OnInit, OnDestroy {
	constructor(private helper: HelperService) {
		this.helper.init(this.constructor.name);
		this.helper.log("constructor");
	}

	ngOnInit() {
		this.helper.log("ngOnInit");
		this.demo();
	}

	ngOnDestroy() {
		this.helper.log("ngOnDestroy");

		this.helper.stop();
	}

	demo() {
		this.helper.log("demo");

		const { world, engine, render, width, height } = this.helper.create(
			document.getElementById("container")
		);
		Render.run(render);

		const runner = Runner.create();
		Runner.run(runner, engine);

		World.add(world, [
			Bodies.rectangle(200, 100, 60, 60, { frictionAir: 0.001 }),
			Bodies.rectangle(400, 100, 60, 60, { frictionAir: 0.05 }),
			Bodies.rectangle(600, 100, 60, 60, { frictionAir: 0.1 }),

			Bodies.rectangle(400, 0, 800, 50, { isStatic: true }),
			Bodies.rectangle(400, 600, 800, 50, { isStatic: true }),
			Bodies.rectangle(800, 300, 50, 600, { isStatic: true }),
			Bodies.rectangle(0, 300, 50, 600, { isStatic: true }),
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

		render.mouse = mouse;

		Render.lookAt(render, {
			min: { x: 0, y: 0 },
			max: { x: 800, y: 600 },
		});
	}
}
