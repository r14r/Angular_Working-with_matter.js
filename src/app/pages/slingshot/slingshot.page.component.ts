import { Component, OnInit } from '@angular/core';

import { Events, Engine, Render, World, Constraint, Composite, Bodies, Runner, Composites, Mouse, MouseConstraint } from 'matter-js';

@Component({

	selector: 'app-slingshot-page',
	templateUrl: './slingshot.page.component.html',
	styleUrls: ['./slingshot.page.component.scss']
})
export class SlingshotPageComponent implements OnInit {

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
		const ground = Bodies.rectangle(395, 600, 815, 50, { isStatic: true });
		const rockOptions = { density: 0.004 };
		let rock = Bodies.polygon(170, 450, 8, 20, rockOptions);
		const anchor = { x: 170, y: 450 };
		const elastic = Constraint.create({
			pointA: anchor,
			bodyB: rock,
			stiffness: 0.05
		});

		const pyramid = Composites.pyramid(500, 300, 9, 10, 0, 0, (x, y) => {
			return Bodies.rectangle(x, y, 25, 40);
		});

		const ground2 = Bodies.rectangle(610, 250, 200, 20, { isStatic: true });

		const pyramid2 = Composites.pyramid(550, 0, 5, 10, 0, 0, (x, y) => {
			return Bodies.rectangle(x, y, 25, 40);
		});

		World.add(engine.world, [ground, pyramid, ground2, pyramid2, rock, elastic]);

		Events.on(engine, 'afterUpdate', () => {
			if (mouseConstraint.mouse.button === -1 && (rock.position.x > 190 || rock.position.y < 430)) {
				rock = Bodies.polygon(170, 450, 7, 20, rockOptions);
				World.add(engine.world, rock);
				elastic.bodyB = rock;
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
