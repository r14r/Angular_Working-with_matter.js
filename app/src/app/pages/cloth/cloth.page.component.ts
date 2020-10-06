import { Component, OnInit } from '@angular/core';

import { Body, Engine, Render, World, Common, Composite, Bodies, Runner, Composites, Mouse, MouseConstraint } from 'matter-js';

@Component({

	selector: 'app-cloth-page',
	templateUrl: './cloth.page.component.html',
	styleUrls: ['./cloth.page.component.scss']
})
export class ClothPageComponent implements OnInit {

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
				height: 600
			}
		});

		Render.run(render);

		// create runner
		const runner = Runner.create();
		Runner.run(runner, engine);

		// add bodies
		const group = Body.nextGroup(true);
		const particleOptions = { friction: 0.00001, collisionFilter: { group }, render: { visible: false } };
		const constraintOptions = { stiffness: 0.06 };
		const cloth = Composites.softBody(200, 200, 20, 12, 5, 5, false, 8, particleOptions, constraintOptions);

		for (let i = 0; i < 20; i++) {
			cloth.bodies[i].isStatic = true;
		}

		World.add(world, [
			cloth,
			Bodies.circle(300, 500, 80, { isStatic: true }),
			Bodies.rectangle(500, 480, 80, 80, { isStatic: true }),
			Bodies.rectangle(400, 609, 800, 50, { isStatic: true })
		]);

		// add mouse control
		const mouse = Mouse.create(render.canvas);
		const mouseConstraint = MouseConstraint.create(engine, {
			mouse,
			constraint: {
				stiffness: 0.98,
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
