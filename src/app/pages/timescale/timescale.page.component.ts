import { Component, OnInit } from '@angular/core';

import { Body, Engine, Events, Render, World, Common, Composite, Bodies, Runner, Composites, Mouse, MouseConstraint } from 'matter-js';

@Component({

	selector: 'app-timescale-page',
	templateUrl: './timescale.page.component.html',
	styleUrls: ['./timescale.page.component.scss']
})
export class TimescalePageComponent implements OnInit {

	constructor() { }

	ngOnInit() {
		this.demo();
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
				showAngleIndicator: true
			}
		});

		Render.run(render);

		// create runner
		const runner = Runner.create();
		Runner.run(runner, engine);

		// add bodies
		World.add(world, [
			Bodies.rectangle(400, 0, 800, 50, { isStatic: true }),
			Bodies.rectangle(400, 600, 800, 50, { isStatic: true }),
			Bodies.rectangle(800, 300, 50, 600, { isStatic: true }),
			Bodies.rectangle(0, 300, 50, 600, { isStatic: true })
		]);

		const explosion = (engine) => {
			const bodies = Composite.allBodies(engine.world);

			for (const body of bodies) {
				if (!body.isStatic && body.position.y >= 500) {
					const forceMagnitude = 0.05 * body.mass;

					Body.applyForce(body, body.position, {
						x: (forceMagnitude + Common.random() * forceMagnitude) * Common.choose([1, -1]),
						y: -forceMagnitude + Common.random() * -forceMagnitude
					});
				}
			}
		};

		let timeScaleTarget = 1;
		let counter = 0;
		Events.on(engine, 'afterUpdate', (event) => {
			// tween the timescale for bullet time slow-mo
			engine.timing.timeScale += (timeScaleTarget - engine.timing.timeScale) * 0.05;

			counter += 1;

			// every 1.5 sec
			if (counter >= 60 * 1.5) {

				// flip the timescale
				if (timeScaleTarget < 1) {
					timeScaleTarget = 1;
				} else {
					timeScaleTarget = 0.05;
				}

				// create some random forces
				explosion(engine);

				// reset counter
				counter = 0;
			}
		});

		let bodyOptions = {
			frictionAir: 0,
			friction: 0.0001,
			restitution: 0.8
		};

		// add some small bouncy circles... remember Swordfish?
		World.add(world, Composites.stack(20, 100, 15, 3, 20, 40, (x, y) => {
			return Bodies.circle(x, y, Common.random(10, 20), bodyOptions);
		}));

		// add some larger random bouncy objects
		World.add(world, Composites.stack(50, 50, 8, 3, 0, 0, (x, y) => {
			switch (Math.round(Common.random(0, 1))) {

				case 0:
					if (Common.random() < 0.8) {
						return Bodies.rectangle(x, y, Common.random(20, 50), Common.random(20, 50), bodyOptions);
					} else {
						return Bodies.rectangle(x, y, Common.random(80, 120), Common.random(20, 30), bodyOptions);
					}
				case 1:
					return Bodies.polygon(x, y, Math.round(Common.random(4, 8)), Common.random(20, 50), bodyOptions);

			}
		}));

		// add mouse control
		let mouse = Mouse.create(render.canvas),
			mouseConstraint = MouseConstraint.create(engine, {
				mouse,
				constraint: {
					stiffness: 0.2,
					render: {
						visible: false
					}
				}
			});

		World.add(world, mouseConstraint);

		// keep the mouse in sync with rendering
		render.mouse = mouse;

		// fit the render viewport to the scene
		Render.lookAt(render, {
			min: { x: 0, y: 0 },
			max: { x: 800, y: 600 }
		});

		// context for MatterTools.Demo
		return {
			engine,
			runner,
			render,
			canvas: render.canvas,
			stop: () => {
				Render.stop(render);
				Runner.stop(runner);
			}
		};
	}
}
