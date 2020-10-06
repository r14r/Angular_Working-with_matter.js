import { Component, OnInit } from '@angular/core';

import { Body, Engine, Render, World, Common, Composite, Bodies, Runner, Composites, Mouse, MouseConstraint } from 'matter-js';

@Component({

	selector: 'app-soft-body-page',
	templateUrl: './soft-body.page.component.html',
	styleUrls: ['./soft-body.page.component.scss']
})
export class SoftBodyPageComponent implements OnInit {

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
				showAngleIndicator: false
			}
		});

		Render.run(render);

		// create runner
		const runner = Runner.create();
		Runner.run(runner, engine);

		// add bodies
		const particleOptions = {
			friction: 0.05,
			frictionStatic: 0.1,
			render: { visible: true }
		};

		World.add(world, [
			Composites.softBody(250, 100, 5, 5, 0, 0, true, 18, particleOptions),
			Composites.softBody(400, 300, 8, 3, 0, 0, true, 15, particleOptions),
			Composites.softBody(250, 400, 4, 4, 0, 0, true, 15, particleOptions),
			// walls
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
				stiffness: 0.9,
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
