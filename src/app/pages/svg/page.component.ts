import { Component, OnDestroy, OnInit } from "@angular/core";

import {
	Body,
	Engine,
	Render,
	World,
	Common,
	Vertices,
	Bodies,
	Runner,
	Composites,
	Mouse,
	MouseConstraint,
} from "matter-js";

import { HelperService } from "src/app/services/helper.service";

@Component({
	selector: "app-svg-page",
	templateUrl: "./page.component.html",
	styleUrls: ["./page.component.scss"],
})
export class SvgPageComponent implements OnInit, OnDestroy {
	constructor(private helper: HelperService) {
		this.helper.init(this.constructor.name);
		this.helper.log("constructor");
	}

	ngOnInit() {
		this.demo();
	}

	ngOnDestroy() {
		this.helper.stop();
	}
	demo() {
		alert("to be impemented");
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
	const svgs = [
	'iconmonstr-check-mark-8-icon',
	'iconmonstr-paperclip-2-icon',
	'iconmonstr-puzzle-icon',
	'iconmonstr-user-icon'
	];

	if (typeof $ !== 'undefined') {
	for (let i = 0; i < svgs.length; i += 1) {
		((i) => {
			$.get('./svg/' + svgs[i] + '.svg').done((data) => {
				const vertexSets = [];
				const color = Common.choose(['#556270', '#4ECDC4', '#C7F464', '#FF6B6B', '#C44D58']);

				$(data).find('path').each((i, path) => {
					const points = Svg.pathToVertices(path, 30);
					vertexSets.push(Vertices.scale(points, 0.4, 0.4));
				});

				World.add(world, Bodies.fromVertices(100 + i * 150, 200 + i * 50, vertexSets, {
					render: {
						fillStyle: color,
						strokeStyle: color,
						lineWidth: 1
					}
				}, true));
			});
		})(i);
	}

	$.get('./svg/svg.svg').done((data) => {
		const vertexSets = [];
		const color = Common.choose(['#556270', '#4ECDC4', '#C7F464', '#FF6B6B', '#C44D58']);

		$(data).find('path').each((i, path) => {
			vertexSets.push(Svg.pathToVertices(path, 30));
		});

		World.add(world, Bodies.fromVertices(400, 80, vertexSets, {
			render: {
				fillStyle: color,
				strokeStyle: color,
				lineWidth: 1
			}
		}, true));
	});
	}

	World.add(world, [
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
