import { Component, OnDestroy, OnInit } from "@angular/core";

import {
	Body,
	Engine,
	Render,
	World,
	Constraint,
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
	selector: "app-compound-page",
	templateUrl: "./page.component.html",
	styleUrls: ["./page.component.scss"],
})
export class CompoundPageComponent implements OnInit, OnDestroy {
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
		let size = 200;
		let x = 200;
		let y = 200;

		const partA = Bodies.rectangle(x, y, size, size / 5);
		const partB = Bodies.rectangle(x, y, size / 5, size, {
			render: partA.render,
		});

		const compoundBodyA = Body.create({
			parts: [partA, partB],
		});

		size = 150;
		x = 400;
		y = 300;

		const partC = Bodies.circle(x, y, 30);
		const partD = Bodies.circle(x + size, y, 30);
		const partE = Bodies.circle(x + size, y + size, 30);
		const partF = Bodies.circle(x, y + size, 30);

		const compoundBodyB = Body.create({
			parts: [partC, partD, partE, partF],
		});

		let constraint = Constraint.create({
			pointA: { x: 400, y: 100 },
			bodyB: compoundBodyB,
			pointB: { x: 0, y: 0 },
		});

		World.add(world, [
			compoundBodyA,
			compoundBodyB,
			constraint,
			Bodies.rectangle(400, 600, 800, 50.5, { isStatic: true }),
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
