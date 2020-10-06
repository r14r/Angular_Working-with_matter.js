import { Component, OnInit } from '@angular/core';

import { Body, Engine, Render, World, MouseConstraint, Bodies, Runner, Composites } from 'matter-js';

@Component({
	selector: 'app-minimal',
	templateUrl: './minimal.page.component.html',
	styleUrls: ['./minimal.page.component.scss']
})
export class MinimalExamplePageComponent implements OnInit {
	private MODULE = 'MinimalExamplePageComponent';
	log(func, line = '') {
		console.log(this.MODULE + '::' + func + '|' + line);
	}

	constructor() {
	}

	ngOnInit() {
		this.demo();
	}

	demo() {
		const FUNC = 'demo';
		this.log(FUNC);

		const body = document.body;
		const html = document.documentElement;

		const height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
		const width = Math.max(body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth);

		const canvas = document.getElementById('demo');
		const engine = Engine.create();


		const render = Render.create({
			// element: document.body,
			canvas: canvas,
			engine,
			options: {
				background: 'transparent',
				width: this.percentX(50), // width + 0,
				height: this.percentY(80), // height + 0,
				wireframes: false,
				showAngleIndicator: false,
				showPositions: false,
				showAxes: false,
				hasBounds: false,
				showDebug: false
			}
		});
		this.log(FUNC, 'renderWithCanvas = ' + render);


		/**/
		const ground = Bodies.rectangle(200, 710, 810, 100, { isStatic: true });

		World.add(engine.world, [
			Bodies.rectangle(400, 200, 80, 80),
			Bodies.rectangle(400, 200, 80, 80),
			Bodies.rectangle(450, 50, 80, 80),

			Bodies.circle(380, 100, 40, 10),
			Bodies.circle(460, 10, 40, 10),
			Bodies.circle(100, 100, 50, {
				density: 0.04,
				friction: 0.01,
				frictionAir: 0.00001,
				restitution: 0.8,
				render: { fillStyle: '#F35e66', strokeStyle: 'black', lineWidth: 1 }
			}),
			ground
		]);

		const mouseConstraint = MouseConstraint.create(engine, {
			element: canvas,
			constraint: {
				render: {
					visible: false
				},
				stiffness: 0.8
			}
		});
		World.add(engine.world, mouseConstraint);

		Engine.run(engine);
		Render.run(render);
	}

	percentX(percent) {
		return Math.round(percent / 100 * window.innerWidth);
	}

	percentY(percent) {
		return Math.round(percent / 100 * window.innerHeight);
	}

}
