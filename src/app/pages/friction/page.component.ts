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
	selector: "app-friction-page",
	templateUrl: "./page.component.html",
	styleUrls: ["./page.component.scss"],
})
export class FrictionPageComponent implements OnInit, OnDestroy {
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

		World.add(world, [
			Bodies.rectangle(300, 180, 700, 20, {
				isStatic: true,
				angle: Math.PI * 0.06,
			}),
			Bodies.rectangle(300, 70, 40, 40, { friction: 0.001 }),
		]);

		World.add(world, [
			Bodies.rectangle(300, 350, 700, 20, {
				isStatic: true,
				angle: Math.PI * 0.06,
			}),
			Bodies.rectangle(300, 250, 40, 40, { friction: 0.0005 }),
		]);

		World.add(world, [
			Bodies.rectangle(300, 520, 700, 20, {
				isStatic: true,
				angle: Math.PI * 0.06,
			}),
			Bodies.rectangle(300, 430, 40, 40, { friction: 0 }),
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
