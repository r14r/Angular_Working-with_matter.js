import { Component, OnDestroy, OnInit } from "@angular/core";

import {
	Body,
	Engine,
	Render,
	World,
	Events,
	Composite,
	Bodies,
	Runner,
	Composites,
	Mouse,
	MouseConstraint,
} from "matter-js";

import { HelperService } from "src/app/services/helper.service";

@Component({
	selector: "app-static-friction-page",
	templateUrl: "./page.component.html",
	styleUrls: ["./page.component.scss"],
})
export class StaticFrictionPageComponent implements OnInit, OnDestroy {
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
		const body = Bodies.rectangle(400, 500, 200, 60, {
			isStatic: true,
			chamfer: 10,
		});
		const size = 50;
		let counter = -1;

		const stack = Composites.stack(
			350,
			470 - 6 * size,
			1,
			6,
			0,
			0,
			(x, y) => {
				return Bodies.rectangle(x, y, size * 2, size, {
					slop: 0.5,
					friction: 1,
					frictionStatic: Infinity,
				});
			}
		);

		World.add(world, [
			body,
			stack,
			// walls
			Bodies.rectangle(400, 0, 800, 50, { isStatic: true }),
			Bodies.rectangle(400, 600, 800, 50, { isStatic: true }),
			Bodies.rectangle(800, 300, 50, 600, { isStatic: true }),
			Bodies.rectangle(0, 300, 50, 600, { isStatic: true }),
		]);

		Events.on(engine, "beforeUpdate", (event) => {
			counter += 0.014;

			if (counter < 0) {
				return;
			}

			const px = 400 + 100 * Math.sin(counter);

			// body is static so must manually update velocity for friction to work
			Body.setVelocity(body, { x: px - body.position.x, y: 0 });
			Body.setPosition(body, { x: px, y: body.position.y });
		});

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
