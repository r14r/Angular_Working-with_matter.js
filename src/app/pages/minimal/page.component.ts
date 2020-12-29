import { Component, OnDestroy, OnInit } from "@angular/core";

import {
	Body,
	Engine,
	Render,
	World,
	MouseConstraint,
	Bodies,
	Runner,
	Composites,
} from "matter-js";

import { HelperService } from "src/app/services/helper.service";

@Component({
	selector: "app-minimal",
	templateUrl: "./page.component.html",
	styleUrls: ["./page.component.scss"],
})
export class MinimalExamplePageComponent implements OnInit, OnDestroy {
	private MODULE = "MinimalExamplePageComponent";
	log(func, line = "") {
		console.log(this.MODULE + "::" + func + "|" + line);
	}

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
		const FUNC = "demo";
		this.log(FUNC);

		const body = document.body;
		const html = document.documentElement;

		this.helper.log("demo");

		const { world, engine, render, width, height } = this.helper.create(
			document.getElementById("container")
		);

		Render.run(render);

		const canvas = document.getElementById("container");

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
				render: {
					fillStyle: "#F35e66",
					strokeStyle: "black",
					lineWidth: 1,
				},
			}),
			ground,
		]);

		const mouseConstraint = MouseConstraint.create(engine, {
			element: canvas,
			constraint: {
				render: {
					visible: false,
				},
				stiffness: 0.8,
			},
		});
		World.add(engine.world, mouseConstraint);

		Engine.run(engine);
		Render.run(render);
	}

	percentX(percent) {
		return Math.round((percent / 100) * window.innerWidth);
	}

	percentY(percent) {
		return Math.round((percent / 100) * window.innerHeight);
	}
}
