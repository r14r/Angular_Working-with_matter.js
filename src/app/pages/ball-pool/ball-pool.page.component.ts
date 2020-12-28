import { Component, OnInit } from '@angular/core';

import { Body, Engine, Render, World, Common, Composite, Bodies, Runner, Composites, Mouse, MouseConstraint } from 'matter-js';
@Component({

	selector: 'app-ball-pool-page',
	templateUrl: './ball-pool.page.component.html',
	styleUrls: ['./ball-pool.page.component.scss']
})
export class BallPoolPageComponent implements OnInit {

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
			Bodies.rectangle(400, 600, 1200, 50.5, { isStatic: true })
		]);

		const stack = Composites.stack(100, 0, 10, 8, 10, 10, (x, y) => {
			return Bodies.circle(x, y, Common.random(15, 30), { restitution: 0.6, friction: 0.1 });
		});

		World.add(world, [
			stack,
			Bodies.polygon(200, 460, 3, 60),
			Bodies.polygon(400, 460, 5, 60),
			Bodies.rectangle(600, 460, 80, 80)
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

		// wrapping using matter-wrap plugin
		const allBodies = Composite.allBodies(world);

		for (const body of allBodies) {
			body.plugin.wrap = {
				min: { x: render.bounds.min.x - 100, y: render.bounds.min.y },
				max: { x: render.bounds.max.x + 100, y: render.bounds.max.y }
			};
		}

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
