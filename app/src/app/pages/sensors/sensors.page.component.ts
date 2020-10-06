import { Component, OnInit } from '@angular/core';

import { Body, Engine, Render, World, Events, Composite, Bodies, Runner, Composites, Mouse, MouseConstraint } from 'matter-js';

@Component({

	selector: 'app-sensors-page',
	templateUrl: './sensors.page.component.html',
	styleUrls: ['./sensors.page.component.scss']
})
export class SensorsPageComponent implements OnInit {

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
				wireframes: false,
				background: '#111'
			}
		});

		Render.run(render);

		// create runner
		const runner = Runner.create();
		Runner.run(runner, engine);

		// add bodies
		const redColor = '#C44D58';
		const greenColor = '#C7F464';

		const collider = Bodies.rectangle(400, 300, 500, 50, {
			isSensor: true,
			isStatic: true,
			render: {
				strokeStyle: redColor,
				fillStyle: 'transparent',
				lineWidth: 1
			}
		});

		World.add(world, [
			collider,
			Bodies.rectangle(400, 620, 800, 50, {
				isStatic: true,
				render: {
					fillStyle: 'transparent',
					lineWidth: 1
				}
			})
		]);

		World.add(world,
			Bodies.circle(400, 40, 30, {
				render: {
					strokeStyle: greenColor,
					fillStyle: 'transparent',
					lineWidth: 1
				}
			})
		);

		Events.on(engine, 'collisionStart', (event) => {
			const pairs = event.pairs;

			for (let i = 0, j = pairs.length; i !== j; ++i) {
				const pair = pairs[i];

				if (pair.bodyA === collider) {
					pair.bodyB.render.strokeStyle = redColor;
				} else if (pair.bodyB === collider) {
					pair.bodyA.render.strokeStyle = redColor;
				}
			}
		});

		Events.on(engine, 'collisionEnd', (event) => {
			const pairs = event.pairs;

			for (let i = 0, j = pairs.length; i !== j; ++i) {
				const pair = pairs[i];

				if (pair.bodyA === collider) {
					pair.bodyB.render.strokeStyle = greenColor;
				} else if (pair.bodyB === collider) {
					pair.bodyA.render.strokeStyle = greenColor;
				}
			}
		});

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
			}
		};
	}
}
