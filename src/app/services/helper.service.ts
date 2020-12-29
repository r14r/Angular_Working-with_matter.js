import { Injectable } from "@angular/core";

import { Engine, Render } from "matter-js";

@Injectable({
	providedIn: "root",
})
export class HelperService {
	public engine;
	public world;
	public body;
	public html;
	public height;
	public width;

	public render;
	public runner;

	prefix: string;

	constructor() {}

	init(prefix: string) {
		this.prefix = prefix;
	}
	log(func: string, line: string = "") {
		console.log(this.prefix + "::" + func + "|" + line);
	}

	create(element: HTMLElement) {
		//

		//
		this.body = document.body;
		this.html = document.documentElement;

		const engine = Engine.create();
		const world = engine.world;

		const height =
			Math.max(
				this.body.scrollHeight,
				this.body.offsetHeight,
				this.html.clientHeight,
				this.html.scrollHeight,
				this.html.offsetHeight
			) - 200;
		const width =
			Math.max(
				this.body.scrollWidth,
				this.body.offsetWidth,
				this.html.clientWidth,
				this.html.scrollWidth,
				this.html.offsetWidth
			) - 100;

		// const canvasWidth = this.percentX(95);
		// const canvasHeight = this.percentY(90);

		const render = Render.create({
			element: element || document.body,
			engine: engine,
			options: {
				width: width,
				height: height,
				showVelocity: true,
				showAngleIndicator: true,
				showCollisions: true,
				showConvexHulls: false,
				hasBounds: false,
				wireframe: false,
				background: "#AAAAAA",
			},
		});

		this.world = world;
		this.engine = engine;
		this.render = render;
		this.width = width;
		this.height = height;

		return { world, engine, render, width, height };
	}

	stop() {
		try {
			Render.stop(this.render);
			Render.stop(this.runner);
		} catch {}
	}

	percentX(percent) {
		return Math.round((percent / 100) * window.innerWidth);
	}

	percentY(percent) {
		return Math.round((percent / 100) * window.innerHeight);
	}
}
