import { Component, OnInit } from '@angular/core';

import { Body, Engine, Render, World, Common, Composite, Bodies, Runner, Composites, Mouse, MouseConstraint } from 'matter-js';

@Component({

	selector: 'app-car-page',
	templateUrl: './car.page.component.html',
	styleUrls: ['./car.page.component.scss']
})
export class CarPageComponent implements OnInit {

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
				showAngleIndicator: true,
				showCollisions: true
			}
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
			Bodies.rectangle(0, 300, 50, 600, { isStatic: true })
		]);

		let scale = 0.9;
		World.add(world, Composites.car(150, 100, 150 * scale, 30 * scale, 30 * scale));

		scale = 0.8;
		World.add(world, Composites.car(350, 300, 150 * scale, 30 * scale, 30 * scale));

		World.add(world, [
			Bodies.rectangle(200, 150, 400, 20, { isStatic: true, angle: Math.PI * 0.06 }),
			Bodies.rectangle(500, 350, 650, 20, { isStatic: true, angle: -Math.PI * 0.06 }),
			Bodies.rectangle(300, 560, 600, 20, { isStatic: true, angle: Math.PI * 0.04 })
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
