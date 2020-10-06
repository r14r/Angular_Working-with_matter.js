import { Component, OnInit } from '@angular/core';

import { Body, Engine, Render, World, Common, Bodies, Runner, Composites, Mouse, MouseConstraint } from 'matter-js';

@Component({

	selector: 'app-mixed-shapes',
	templateUrl: './mixed-shapes.page.component.html',
	styleUrls: ['./mixed-shapes.page.component.scss']
})
export class MixedShapesPageComponent implements OnInit {
	private CLASS = 'MixedShapesPageComponent';
	log(func, line = '') {
		console.log(this.CLASS + ':' + func + '|' + line);
	}

	mixed() {
		const FUNC = 'mixed';
		this.log(FUNC);

		// create e
		const engine = Engine.create();
		const world = World;

		this.log(FUNC, 'engine= ' + engine);
		this.log(FUNC, 'world = ' + world);

		const render = Render.create({
			element: document.body,
			engine,
			options: {
				width: 800,
				height: 600,
				showAngleIndicator: true,
			}
		});
		this.log(FUNC, 'run render = ' + render);
		Render.run(render);

		// create runner
		const runner = Runner.create();

		this.log(FUNC, 'run runner = ' + runner);
		Runner.run(runner, engine);

		// add Bodies
		this.log(FUNC, 'create boddies');
		const stack = Composites.stack(20, 20, 10, 5, 0, 0, (x, y) => {
			let sides = Math.round(Common.random(1, 8));

			// triangles can be a little unstable, so avoid until fixed
			sides = (sides === 3) ? 4 : sides;

			// round the edges of some Bodies
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
		this.log(FUNC, 'add stack = ' + stack + ' to w = ' + world);
		World.add(world, stack);

		const walls = [
			Bodies.rectangle(400, 0, 800, 50, { isStatic: true }),
			Bodies.rectangle(400, 600, 800, 50, { isStatic: true }),
			Bodies.rectangle(800, 300, 50, 600, { isStatic: true }),
			Bodies.rectangle(0, 300, 50, 600, { isStatic: true })
		];

		this.log(FUNC, 'add walls to w = ' + walls);
		World.add(world, [
			walls
		]);

		return;

		// add mouse control
		const mouse = Mouse.create(Render.canvas);
		const mouseConstraint = MouseConstraint.create(engine, {
			mouse,
			constraint: {
				stiffness: 0.2,
				Render: {
					visible: false
				}
			}
		});

		/*
		const mouse = Mouse.create(Render.canvas),
			mouseConstraint = MouseConstraint.create(e, {
				mouse,
				constraint: {
					stiffness: 0.2,
					Render: {
						visible: false
					}
				}
			});
		*/

		World.add(World, mouseConstraint);

		// keep the mouse in sync with Rendering
		Render.mouse = mouse;

		// fit the Render viewport to the scene
		Render.lookAt(Render, {
			min: { x: 0, y: 0 },
			max: { x: 800, y: 600 }
		});

		// context for MTools.Demo
		return {
			engine,
			runner,
			render,
			canvas: Render.canvas,
			stop: () => {
				Render.stop(Render);
				Runner.stop(runner);
			}
		};
	}

	constructor() {
		const FUNC = 'constructor';
		this.log(FUNC);
	}

	ngOnInit() {
		const FUNC = 'ngOnInit';
		this.log(FUNC);

		this.mixed();
	}

}
