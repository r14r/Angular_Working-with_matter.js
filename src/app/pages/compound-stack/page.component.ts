import { Component, OnDestroy, OnInit } from "@angular/core";

import {
	Body,
	Engine,
	Render,
	World,
	Common,
	Constraint,
	Bodies,
	Runner,
	Composites,
	Mouse,
	MouseConstraint,
} from "matter-js";

import { HelperService } from "src/app/services/helper.service";

@Component({
	selector: "app-compound-stack-page",
	templateUrl: "./page.component.html",
	styleUrls: ["./page.component.scss"],
})
export class CompoundStackPageComponent implements OnInit, OnDestroy {
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
		const size = 50;

		const stack = Composites.stack(100, 280, 12, 6, 0, 0, (x, y) => {
			const partA = Bodies.rectangle(x, y, size, size / 5);
			const partB = Bodies.rectangle(x, y, size / 5, size, {
				render: partA.render,
			});

			return Body.create({
				parts: [partA, partB],
			});
		});

		World.add(world, [
			stack,
			// walls
			Bodies.rectangle(400, 0, 800, 50, { isStatic: true }),
			Bodies.rectangle(800, 300, 50, 600, { isStatic: true }),
			Bodies.rectangle(0, 300, 50, 600, { isStatic: true }),
			Bodies.rectangle(400, 609, 800, 50, { isStatic: true }),
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
