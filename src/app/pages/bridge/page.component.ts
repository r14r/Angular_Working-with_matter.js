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
	selector: "app-bridge-page",
	templateUrl: "./page.component.html",
	styleUrls: ["./page.component.scss"],
})
export class BridgePageComponent implements OnInit, OnDestroy {
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

		// create runner
		const runner = Runner.create();
		Runner.run(runner, engine);

		// add bodies
		const group = Body.nextGroup(true);

		const bridge = Composites.stack(160, 290, 15, 1, 0, 0, (x, y) => {
			return Bodies.rectangle(x - 20, y, 53, 20, {
				collisionFilter: { group },
				chamfer: 5,
				density: 0.005,
				frictionAir: 0.05,
				render: {
					fillStyle: "#575375",
				},
			});
		});

		Composites.chain(bridge, 0.3, 0, -0.3, 0, {
			stiffness: 1,
			length: 0,
			render: {
				visible: false,
			},
		});

		const stack = Composites.stack(250, 50, 6, 3, 0, 0, (x, y) => {
			return Bodies.rectangle(x, y, 50, 50, Common.random(20, 40));
		});

		World.add(world, [
			bridge,
			stack,
			Bodies.rectangle(30, 490, 220, 380, {
				isStatic: true,
				chamfer: { radius: 20 },
			}),
			Bodies.rectangle(770, 490, 220, 380, {
				isStatic: true,
				chamfer: { radius: 20 },
			}),
			Constraint.create({
				pointA: { x: 140, y: 300 },
				bodyB: bridge.bodies[0],
				pointB: { x: -25, y: 0 },
				length: 2,
				stiffness: 0.9,
			}),
			Constraint.create({
				pointA: { x: 660, y: 300 },
				bodyB: bridge.bodies[bridge.bodies.length - 1],
				pointB: { x: 25, y: 0 },
				length: 2,
				stiffness: 0.9,
			}),
		]);

		// add mouse control
		const mouse = Mouse.create(render.canvas);
		const mouseConstraint = MouseConstraint.create(engine, {
			mouse,
			constraint: {
				stiffness: 0.1,
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
