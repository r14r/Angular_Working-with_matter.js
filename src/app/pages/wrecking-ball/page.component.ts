import { Component, OnDestroy, OnInit } from "@angular/core";

import {
	Engine,
	Events,
	Bounds,
	Render,
	World,
	Vector,
	Common,
	Bodies,
	Runner,
	Composites,
	Mouse,
	MouseConstraint,
} from "matter-js";

import { HelperService } from "src/app/services/helper.service";

@Component({
	selector: "app-wrecking-ball-page",
	templateUrl: "./page.component.html",
	styleUrls: ["./page.component.scss"],
})
export class WreckingBallPageComponent implements OnInit, OnDestroy {
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
				hasBounds: true,
				showAngleIndicator: true,
			},
		});

		Render.run(render);

		// create runner
		const runner = Runner.create();
		Runner.run(runner, engine);

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

		// add bodies
		const stack = Composites.stack(20, 20, 15, 4, 0, 0, (x, y) => {
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
					let sides = Math.round(Common.random(1, 8));
					sides = sides === 3 ? 4 : sides;
					return Bodies.polygon(x, y, sides, Common.random(20, 50));
			}
		});

		World.add(world, [
			stack,
			// walls
			Bodies.rectangle(400, 0, 800, 50, { isStatic: true }),
			Bodies.rectangle(400, 600, 800, 50, { isStatic: true }),
			Bodies.rectangle(800, 300, 50, 600, { isStatic: true }),
			Bodies.rectangle(0, 300, 50, 600, { isStatic: true }),
		]);

		// get the centre of the viewport
		const viewportCentre = {
			x: render.options.width * 0.5,
			y: render.options.height * 0.5,
		};

		// make the world bounds a little bigger than the render bounds
		world.bounds.min.x = -300;
		world.bounds.min.y = -300;
		world.bounds.max.x = 1100;
		world.bounds.max.y = 900;

		// keep track of current bounds scale (view zoom)
		let boundsScaleTarget = 1;
		const boundsScale = {
			x: 1,
			y: 1,
		};

		// use the engine tick event to control our view
		Events.on(engine, "beforeTick", () => {
			const world = engine.world;
			const mouse = mouseConstraint.mouse;
			let translate;

			// mouse wheel controls zoom
			let scaleFactor = mouse.wheelDelta * -0.1;
			if (scaleFactor !== 0) {
				if (
					(scaleFactor < 0 && boundsScale.x >= 0.6) ||
					(scaleFactor > 0 && boundsScale.x <= 1.4)
				) {
					boundsScaleTarget += scaleFactor;
				}
			}

			// if scale has changed
			if (Math.abs(boundsScale.x - boundsScaleTarget) > 0.01) {
				// smoothly tween scale factor
				scaleFactor = (boundsScaleTarget - boundsScale.x) * 0.2;
				boundsScale.x += scaleFactor;
				boundsScale.y += scaleFactor;

				// scale the render bounds
				render.bounds.max.x =
					render.bounds.min.x + render.options.width * boundsScale.x;
				render.bounds.max.y =
					render.bounds.min.y + render.options.height * boundsScale.y;

				// translate so zoom is from centre of view
				translate = {
					x: render.options.width * scaleFactor * -0.5,
					y: render.options.height * scaleFactor * -0.5,
				};

				Bounds.translate(render.bounds, translate);

				// update mouse
				Mouse.setScale(mouse, boundsScale);
				Mouse.setOffset(mouse, render.bounds.min);
			}

			// get vector from mouse relative to centre of viewport
			const deltaCentre = Vector.sub(mouse.absolute, viewportCentre);
			const centreDist = Vector.magnitude(deltaCentre);

			// translate the view if mouse has moved over 50px from the centre of viewport
			if (centreDist > 50) {
				// create a vector to translate the view, allowing the user to control view speed
				const direction = Vector.normalise(deltaCentre);
				const speed = Math.min(
					10,
					Math.pow(centreDist - 50, 2) * 0.0002
				);

				translate = Vector.mult(direction, speed);

				// prevent the view moving outside the world bounds
				if (render.bounds.min.x + translate.x < world.bounds.min.x) {
					translate.x = world.bounds.min.x - render.bounds.min.x;
				}

				if (render.bounds.max.x + translate.x > world.bounds.max.x) {
					translate.x = world.bounds.max.x - render.bounds.max.x;
				}

				if (render.bounds.min.y + translate.y < world.bounds.min.y) {
					translate.y = world.bounds.min.y - render.bounds.min.y;
				}

				if (render.bounds.max.y + translate.y > world.bounds.max.y) {
					translate.y = world.bounds.max.y - render.bounds.max.y;
				}

				// move the view
				Bounds.translate(render.bounds, translate);

				// we must update the mouse too
				Mouse.setOffset(mouse, render.bounds.min);
			}
		});
	}
}
