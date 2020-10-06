import { Component, OnInit } from '@angular/core';

import { Body, Engine, Render, World, Constraint, Composite, Bodies, Runner, Vector, Composites, Mouse, MouseConstraint } from 'matter-js';

@Component({

	selector: 'app-catapult-page',
	templateUrl: './catapult.page.component.html',
	styleUrls: ['./catapult.page.component.scss']
})
export class CatapultPageComponent implements OnInit {

	constructor() { }

	ngOnInit() {
		this.demo();
	}

	demo() {
		const engine = Engine.create();
		const world = engine.world;

		// create renderer
		const render = Render.create({
			element: document.body,
			engine,
			options: {
				width: 800,
				height: 600,
				showAngleIndicator: true,
				showCollisions: true,
				showVelocity: true
			}
		});

		Render.run(render);

		// create runner
		const runner = Runner.create();
		Runner.run(runner, engine);

		// add bodies
		const group = Body.nextGroup(true);

		const stack = Composites.stack(250, 255, 1, 6, 0, 0, (x, y) => {
			return Bodies.rectangle(x, y, 30, 30);
		});

		const catapult = Bodies.rectangle(400, 520, 320, 20, { collisionFilter: { group } });

		World.add(world, [
			stack,
			catapult,
			Bodies.rectangle(400, 600, 800, 50.5, { isStatic: true }),
			Bodies.rectangle(250, 555, 20, 50, { isStatic: true }),
			Bodies.rectangle(400, 535, 20, 80, { isStatic: true, collisionFilter: { group } }),
			Bodies.circle(560, 100, 50, { density: 0.005 }),
			Constraint.create({
				bodyA: catapult,
				pointB: Vector.clone(catapult.position),
				stiffness: 1,
				length: 0
			})
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
