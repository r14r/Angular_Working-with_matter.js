import { Component, OnInit } from '@angular/core';

import { Body, Engine, Events, Vector, Render, World, Constraint, Composite, Bodies, Runner, Composites } from 'matter-js';
import { Mouse, MouseConstraint } from 'matter-js';

@Component({

	selector: 'app-double-pendulum-page',
	templateUrl: './double-pendulum.page.component.html',
	styleUrls: ['./double-pendulum.page.component.scss']
})
export class DoublePendulumPageComponent implements OnInit {

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
				background: '#0f0f13'
			}
		});

		Render.run(render);

		// create runner
		const runner = Runner.create();
		Runner.run(runner, engine);

		// add bodies
		const group = Body.nextGroup(true);
		const length = 200;
		const width = 25;

		const pendulum = Composites.stack(350, 160, 2, 1, -20, 0, (x, y) => {
			return Bodies.rectangle(x, y, length, width, {
				collisionFilter: { group },
				frictionAir: 0,
				chamfer: 5,
				render: {
					fillStyle: 'transparent',
					lineWidth: 1
				}
			});
		});

		pendulum.bodies[0].render.strokeStyle = '#4a485b';
		pendulum.bodies[1].render.strokeStyle = '#4a485b';

		world.gravity.scale = 0.002;

		Composites.chain(pendulum, 0.45, 0, -0.45, 0, {
			stiffness: 0.9,
			length: 0,
			angularStiffness: 0.7,
			render: {
				strokeStyle: '#4a485b'
			}
		});

		Composite.add(pendulum, Constraint.create({
			bodyB: pendulum.bodies[0],
			pointB: { x: -length * 0.42, y: 0 },
			pointA: { x: pendulum.bodies[0].position.x - length * 0.42, y: pendulum.bodies[0].position.y },
			stiffness: 0.9,
			length: 0,
			render: {
				strokeStyle: '#4a485b'
			}
		}));

		const lowerArm = pendulum.bodies[1];

		Body.rotate(lowerArm, -Math.PI * 0.3, {
			x: lowerArm.position.x - 100,
			y: lowerArm.position.y
		});

		World.add(world, pendulum);

		const trail = [];

		Events.on(render, 'afterRender', () => {
			trail.unshift({
				position: Vector.clone(lowerArm.position),
				speed: lowerArm.speed
			});

			Render.startViewTransform(render);
			render.context.globalAlpha = 0.7;

			for (const t of trail) {
				const point = t.position;
				const speed = t.speed;

				const hue = 250 + Math.round((1 - Math.min(1, speed / 10)) * 170);
				render.context.fillStyle = 'hsl(' + hue + ', 100%, 55%)';
				render.context.fillRect(point.x, point.y, 2, 2);
			}

			render.context.globalAlpha = 1;
			Render.endViewTransform(render);

			if (trail.length > 2000) {
				trail.pop();
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
			max: { x: 700, y: 600 }
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
