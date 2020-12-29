import { Component, OnDestroy, OnInit } from "@angular/core";

import {
	Body,
	Engine,
	Render,
	World,
	Constraint,
	Composite,
	Bodies,
	Runner,
	Vector,
	Composites,
	Mouse,
	MouseConstraint,
} from "matter-js";

import { HelperService } from "src/app/services/helper.service";

@Component({
	selector: "app-catapult-page",
	templateUrl: "./page.component.html",
	styleUrls: ["./page.component.scss"],
})
export class CatapultPageComponent implements OnInit, OnDestroy {
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
		const group = Body.nextGroup(true);

		const stack = Composites.stack(250, 255, 1, 6, 0, 0, (x, y) => {
			return Bodies.rectangle(x, y, 30, 30);
		});

		const catapult = Bodies.rectangle(400, 520, 320, 20, {
			collisionFilter: { group },
		});

		World.add(world, [
			stack,
			catapult,
			Bodies.rectangle(400, 600, 800, 50.5, { isStatic: true }),
			Bodies.rectangle(250, 555, 20, 50, { isStatic: true }),
			Bodies.rectangle(400, 535, 20, 80, {
				isStatic: true,
				collisionFilter: { group },
			}),
			Bodies.circle(560, 100, 50, { density: 0.005 }),
			Constraint.create({
				bodyA: catapult,
				pointB: Vector.clone(catapult.position),
				stiffness: 1,
				length: 0,
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
