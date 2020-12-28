import { Component, OnInit } from '@angular/core';

import { Body, Engine, Render, World, Common, Composite, Bodies, Runner, Composites, Mouse, MouseConstraint } from 'matter-js';

@Component({

	selector: 'app-gyro-page',
	templateUrl: './gyro.page.component.html',
	styleUrls: ['./gyro.page.component.scss']
})
export class GyroPageComponent implements OnInit {

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
		const stack = Composites.stack(20, 20, 10, 5, 0, 0, (x, y) => {
			let sides = Math.round(Common.random(1, 8));

			// triangles can be a little unstable, so avoid until fixed
			sides = (sides === 3) ? 4 : sides;

			// round the edges of some bodies
			let chamfer = null;
			if (sides > 2 && Common.random() > 0.7) {
				chamfer = {
					radius: 10
				};
			}

			switch (Math.round(Common.random(0, 1))) {
				case 0:
					if (Common.random() < 0.8) {
						return Bodies.rectangle(x, y, Common.random(25, 50), Common.random(25, 50), { chamfer });
					} else {
						return Bodies.rectangle(x, y, Common.random(80, 120), Common.random(25, 30), { chamfer });
					}
				case 1:
					return Bodies.polygon(x, y, sides, Common.random(25, 50), { chamfer });
			}
		});

		World.add(world, [
			stack,
			Bodies.rectangle(400, 0, 800, 50, { isStatic: true }),
			Bodies.rectangle(400, 600, 800, 50, { isStatic: true }),
			Bodies.rectangle(800, 300, 50, 600, { isStatic: true }),
			Bodies.rectangle(0, 300, 50, 600, { isStatic: true })
		]);

		// add gyro control
		let updateGravity = (event) => {
		};

		if (typeof window !== 'undefined') {
			updateGravity = (event) => {
				const orientation = typeof window.orientation !== 'undefined' ? window.orientation : 0;
				const gravity = engine.world.gravity;

				if (orientation === 0) {
					gravity.x = Common.clamp(event.gamma, -90, 90) / 90;
					gravity.y = Common.clamp(event.beta, -90, 90) / 90;
				} else if (orientation === 180) {
					gravity.x = Common.clamp(event.gamma, -90, 90) / 90;
					gravity.y = Common.clamp(-event.beta, -90, 90) / 90;
				} else if (orientation === 90) {
					gravity.x = Common.clamp(event.beta, -90, 90) / 90;
					gravity.y = Common.clamp(-event.gamma, -90, 90) / 90;
				} else if (orientation === -90) {
					gravity.x = Common.clamp(-event.beta, -90, 90) / 90;
					gravity.y = Common.clamp(event.gamma, -90, 90) / 90;
				}
			};

			window.addEventListener('deviceorientation', updateGravity);
		}

		// add mouse control
		const mouse = Mouse.create(render.canvas);
		const mouseConstraint = MouseConstraint.create(engine, {
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
				if (typeof window !== 'undefined') {
					window.removeEventListener('deviceorientation', updateGravity);
				}
			}
		};
	};

}
