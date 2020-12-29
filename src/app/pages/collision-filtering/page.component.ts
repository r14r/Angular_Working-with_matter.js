import { Component, OnDestroy, OnInit } from "@angular/core";

import {
	Body,
	Engine,
	Render,
	World,
	Common,
	Composite,
	Bodies,
	Runner,
	Composites,
	Mouse,
	MouseConstraint,
} from "matter-js";

import { HelperService } from "src/app/services/helper.service";

@Component({
	selector: "app-collision-filtering-page",
	templateUrl: "./page.component.html",
	styleUrls: ["./page.component.scss"],
})
export class CollisionFilteringPageComponent implements OnInit, OnDestroy {
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
		this.helper.log("demo");

		const { world, engine, render, width, height } = this.helper.create(
			document.getElementById("container")
		);

		Render.run(render);

		// create runner
		const runner = Runner.create();
		Runner.run(runner, engine);

		// define our categories (as bit fields, there are up to 32 available)
		let defaultCategory = 0x0001,
			redCategory = 0x0002,
			greenCategory = 0x0004,
			blueCategory = 0x0008;

		let redColor = "#C44D58",
			blueColor = "#4ECDC4",
			greenColor = "#C7F464";

		// add floor
		World.add(
			world,
			Bodies.rectangle(400, 600, 900, 50, {
				isStatic: true,
				render: {
					fillStyle: "transparent",
					lineWidth: 1,
				},
			})
		);

		// create a stack with varying body categories (but these bodies can all collide with each other)
		World.add(
			world,
			Composites.stack(
				275,
				100,
				5,
				9,
				10,
				10,
				function (x, y, column, row) {
					let category = redCategory,
						color = redColor;

					if (row > 5) {
						category = blueCategory;
						color = blueColor;
					} else if (row > 2) {
						category = greenCategory;
						color = greenColor;
					}

					return Bodies.circle(x, y, 20, {
						collisionFilter: {
							category: category,
						},
						render: {
							strokeStyle: color,
							fillStyle: "transparent",
							lineWidth: 1,
						},
					});
				}
			)
		);

		// this body will only collide with the walls and the green bodies
		World.add(
			world,
			Bodies.circle(310, 40, 30, {
				collisionFilter: {
					mask: defaultCategory | greenCategory,
				},
				render: {
					fillStyle: greenColor,
				},
			})
		);

		// this body will only collide with the walls and the red bodies
		World.add(
			world,
			Bodies.circle(400, 40, 30, {
				collisionFilter: {
					mask: defaultCategory | redCategory,
				},
				render: {
					fillStyle: redColor,
				},
			})
		);

		// this body will only collide with the walls and the blue bodies
		World.add(
			world,
			Bodies.circle(480, 40, 30, {
				collisionFilter: {
					mask: defaultCategory | blueCategory,
				},
				render: {
					fillStyle: blueColor,
				},
			})
		);

		// add mouse control
		const mouse = Mouse.create(render.canvas);
		const mouseConstraint = MouseConstraint.create(engine, {
			mouse,
			constraint: {
				stiffness: 0.2,
				render: {
					visible: false,
				},
			},
		});

		World.add(world, mouseConstraint);

		// keep the mouse in sync with rendering
		render.mouse = mouse;

		// red category objects should not be draggable with the mouse
		mouseConstraint.collisionFilter.mask =
			defaultCategory | blueCategory | greenCategory;

		// fit the render viewport to the scene
		Render.lookAt(render, {
			min: { x: 0, y: 0 },
			max: { x: 800, y: 600 },
		});
	}
}
