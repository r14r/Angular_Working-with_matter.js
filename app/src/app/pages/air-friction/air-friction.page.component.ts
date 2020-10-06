import { Component, OnInit } from '@angular/core';

import { Body, Engine, Render, World, Common, Bodies, Runner, Composites, Mouse, MouseConstraint } from 'matter-js';

@Component({

	selector: 'app-air-friction-page',
	templateUrl: './air-friction.page.component.html',
	styleUrls: ['./air-friction.page.component.scss']
})
export class AirFrictionPageComponent implements OnInit {

	constructor() { }

	ngOnInit() {
		this.demo();
	}


	demo() {
		const engine = Engine.create();
		const world = engine.world;

		const render = Render.create({
			element: document.body,
			engine,
			options: {
				width: 800,
				height: 600,
				showVelocity: true
			}
		});

		Render.run(render);

		const runner = Runner.create();
		Runner.run(runner, engine);

		World.add(world, [
			Bodies.rectangle(200, 100, 60, 60, { frictionAir: 0.001 }),
			Bodies.rectangle(400, 100, 60, 60, { frictionAir: 0.05 }),
			Bodies.rectangle(600, 100, 60, 60, { frictionAir: 0.1 }),

			Bodies.rectangle(400, 0, 800, 50, { isStatic: true }),
			Bodies.rectangle(400, 600, 800, 50, { isStatic: true }),
			Bodies.rectangle(800, 300, 50, 600, { isStatic: true }),
			Bodies.rectangle(0, 300, 50, 600, { isStatic: true })
		]);

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

		render.mouse = mouse;

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
