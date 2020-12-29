import { Component, OnDestroy, OnInit } from "@angular/core";

import {
	Engine,
	Render,
	World,
	Events,
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
	selector: "app-sleeping-page",
	templateUrl: "./page.component.html",
	styleUrls: ["./page.component.scss"],
})
export class SleepingPageComponent implements OnInit, OnDestroy {
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
		const engine = Engine.create({
			enableSleeping: true,
		});
		const world = engine.world;

		// create renderer
		const render = Render.create({
			element: document.body,
			engine,
			options: {
				width: 800,
				height: 600,
				showAngleIndicator: true,
			},
		});

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

		const stack = Composites.stack(50, 50, 12, 3, 0, 0, (x, y) => {
			switch (Math.round(Common.random(0, 1))) {
				case 0:
					if (Common.random() < 0.8) {
						return Bodies.rectangle(
							x,
							y,
							Common.random(20, 50),
							Common.random(20, 50)
						);
					} else {
						return Bodies.rectangle(
							x,
							y,
							Common.random(80, 120),
							Common.random(20, 30)
						);
					}
				case 1:
					return Bodies.polygon(
						x,
						y,
						Math.round(Common.random(1, 8)),
						Common.random(20, 50)
					);
			}
		});

		World.add(world, stack);

		for (const body of stack.bodies) {
			Events.on(body, "sleepStart sleepEnd", (event) => {
				const body = this;
				/* console.log('body id', body.id, 'sleeping:', body.isSleeping); */
				console.log(body);
			});
		}

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
