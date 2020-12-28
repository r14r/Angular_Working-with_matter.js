import { Component, OnInit } from '@angular/core';

import { Body, Engine, Render, World, Common, Composite, Bodies, Runner, Composites, Mouse, MouseConstraint } from 'matter-js';

@Component({

	selector: 'app-friction-page',
	templateUrl: './friction.page.component.html',
	styleUrls: ['./friction.page.component.scss']
})
export class FrictionPageComponent implements OnInit {

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
				showVelocity: true
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

		World.add(world, [
			Bodies.rectangle(300, 180, 700, 20, { isStatic: true, angle: Math.PI * 0.06 }),
			Bodies.rectangle(300, 70, 40, 40, { friction: 0.001 })
		]);

		World.add(world, [
			Bodies.rectangle(300, 350, 700, 20, { isStatic: true, angle: Math.PI * 0.06 }),
			Bodies.rectangle(300, 250, 40, 40, { friction: 0.0005 })
		]);

		World.add(world, [
			Bodies.rectangle(300, 520, 700, 20, { isStatic: true, angle: Math.PI * 0.06 }),
			Bodies.rectangle(300, 430, 40, 40, { friction: 0 })
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
