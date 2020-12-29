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
	selector: "app-mixed-page",
	templateUrl: "./page.component.html",
	styleUrls: ["./page.component.scss"],
})
export class MixedPageComponent implements OnInit, OnDestroy {
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
		const stack = Composites.stack(20, 20, 10, 5, 0, 0, (x, y) => {
			let sides = Math.round(Common.random(1, 8));

			// triangles can be a little unstable, so avoid until fixed
			sides = sides === 3 ? 4 : sides;

			// round the edges of some bodies
			let chamfer = null;
			if (sides > 2 && Common.random() > 0.7) {
				chamfer = {
					radius: 10,
				};
			}

			switch (Math.round(Common.random(0, 1))) {
				case 0:
					if (Common.random() < 0.8) {
						return Bodies.rectangle(
							x,
							y,
							Common.random(25, 50),
							Common.random(25, 50),
							{ chamfer }
						);
					} else {
						return Bodies.rectangle(
							x,
							y,
							Common.random(80, 120),
							Common.random(25, 30),
							{ chamfer }
						);
					}
				case 1:
					return Bodies.polygon(x, y, sides, Common.random(25, 50), {
						chamfer,
					});
			}
		});

		World.add(world, stack);

		World.add(world, [
			// walls
			Bodies.rectangle(400, 0, 800, 50, { isStatic: true }),
			Bodies.rectangle(400, 600, 800, 50, { isStatic: true }),
			Bodies.rectangle(800, 300, 50, 600, { isStatic: true }),
			Bodies.rectangle(0, 300, 50, 600, { isStatic: true }),
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
