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
	selector: "app-avalanche-page",
	templateUrl: "./page.component.html",
	styleUrls: ["./page.component.scss"],
})
export class AvalanchePageComponent implements OnInit, OnDestroy {
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
		const stack = Composites.stack(20, 20, 20, 5, 0, 0, (x, y) => {
			return Bodies.circle(x, y, Common.random(10, 20), {
				friction: 0.00001,
				restitution: 0.5,
				density: 0.001,
			});
		});

		World.add(world, stack);

		World.add(world, [
			Bodies.rectangle(200, 150, 700, 20, {
				isStatic: true,
				angle: Math.PI * 0.06,
			}),
			Bodies.rectangle(500, 350, 700, 20, {
				isStatic: true,
				angle: -Math.PI * 0.06,
			}),
			Bodies.rectangle(340, 580, 700, 20, {
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
		Render.lookAt(render, Composite.allBodies(world));

		for (const body of stack.bodies) {
			body.plugin.wrap = {
				min: { x: render.bounds.min.x, y: render.bounds.min.y },
				max: { x: render.bounds.max.x, y: render.bounds.max.y },
			};
		}
	}
}
