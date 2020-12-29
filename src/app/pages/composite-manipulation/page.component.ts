import { Component, OnDestroy, OnInit } from "@angular/core";

import {
	Body,
	Engine,
	Render,
	World,
	Common,
	Composite,
	Events,
	Bodies,
	Runner,
	Composites,
	Mouse,
	MouseConstraint,
} from "matter-js";

import { HelperService } from "src/app/services/helper.service";

@Component({
	selector: "app-composite-manipulation-page",
	templateUrl: "./page.component.html",
	styleUrls: ["./page.component.scss"],
})
export class CompositeManipulationPageComponent implements OnInit, OnDestroy {
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

		const stack = Composites.stack(200, 200, 4, 4, 0, 0, (x, y) => {
			return Bodies.rectangle(x, y, 40, 40);
		});

		World.add(world, stack);

		world.gravity.y = 0;

		Events.on(engine, "afterUpdate", (event) => {
			const time = engine.timing.timestamp;

			Composite.translate(stack, {
				x: Math.sin(time * 0.001) * 2,
				y: 0,
			});

			Composite.rotate(stack, Math.sin(time * 0.001) * 0.01, {
				x: 300,
				y: 300,
			});

			const scale = 1 + Math.sin(time * 0.001) * 0.01;

			Composite.scale(stack, scale, scale, {
				x: 300,
				y: 300,
			});
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
