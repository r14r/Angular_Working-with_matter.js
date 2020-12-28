import { Component, OnInit } from '@angular/core';

import { Body, Engine, Render, World, Query, Bodies, Runner, Composites, Mouse, MouseConstraint } from 'matter-js';

@Component({

	selector: 'app-terrain-page',
	templateUrl: './terrain.page.component.html',
	styleUrls: ['./terrain.page.component.scss']
})
export class TerrainPageComponent implements OnInit {

	constructor() { }

	ngOnInit() {
		this.demo();
	}

	demo() {
	}

	/*
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
		let terrain;

		if (typeof $ !== 'undefined') {
			$.get('./svg/terrain.svg').done((data) => {
				const vertexSets = [];

				$(data).find('path').each((i, path) => {
					vertexSets.push(Svg.pathToVertices(path, 30));
				});

				terrain = Bodies.fromVertices(400, 350, vertexSets, {
					isStatic: true,
					render: {
						fillStyle: '#2e2b44',
						strokeStyle: '#2e2b44',
						lineWidth: 1
					}
				}, true);

				World.add(world, terrain);

				const bodyOptions = {
					frictionAir: 0,
					friction: 0.0001,
					restitution: 0.6
				};

				World.add(world, Composites.stack(80, 100, 20, 20, 10, 10, (x, y) => {
					if (Query.point([terrain], { x: x, y: y }).length === 0) {
						return Bodies.polygon(x, y, 5, 12, bodyOptions);
					}
				}));
			});
		}

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
	*/
}
