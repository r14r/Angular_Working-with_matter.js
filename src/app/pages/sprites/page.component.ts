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
	selector: "app-sprites-page",
	templateUrl: "./page.component.html",
	styleUrls: ["./page.component.scss"],
})
export class SpritesPageComponent implements OnInit, OnDestroy {
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
		// create engine
		const engine = Engine.create();
		const world = engine.world;

		// create renderer
		const render = Render.create({
			element: document.body,
			engine,
			options: {
				width: 800,
				height: 600,
				background: "#0f0f13",
				showAngleIndicator: false,
				wireframes: false,
			},
		});

		Render.run(render);

		// create runner
		const runner = Runner.create();
		Runner.run(runner, engine);

		// add bodies
		const offset = 10;
		const options = {
			isStatic: true,
		};

		world.bodies = [];

		// these static walls will not be rendered in this sprites example, see options
		World.add(world, [
			Bodies.rectangle(400, -offset, 800.5 + 2 * offset, 50.5, options),
			Bodies.rectangle(
				400,
				600 + offset,
				800.5 + 2 * offset,
				50.5,
				options
			),
			Bodies.rectangle(
				800 + offset,
				300,
				50.5,
				600.5 + 2 * offset,
				options
			),
			Bodies.rectangle(-offset, 300, 50.5, 600.5 + 2 * offset, options),
		]);

		const stack = Composites.stack(20, 20, 10, 4, 0, 0, (x, y) => {
			if (Common.random() > 0.35) {
				return Bodies.rectangle(x, y, 64, 64, {
					render: {
						strokeStyle: "#ffffff",
						sprite: {
							texture: "./img/box.png",
						},
					},
				});
			} else {
				return Bodies.circle(x, y, 46, {
					density: 0.0005,
					frictionAir: 0.06,
					restitution: 0.3,
					friction: 0.01,
					render: {
						sprite: {
							texture: "./img/ball.png",
						},
					},
				});
			}
		});

		World.add(world, stack);

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
