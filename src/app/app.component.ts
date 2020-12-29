import { Component } from "@angular/core";

import { HelperService } from "src/app/services/helper.service";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
})
export class AppComponent {
	title = "App";

	demos = [
		[
			"air-friction",
			"avalanche",
			"ball-pool",
			"bridge",
			"broadphase",
			"car",
			"catapult",
			"chains",
			"circle-stack",
			"cloth",
			"collision-filtering",
			"composite-manipulation",
			"compound",
			"compound-stack",
			"concave",
			"constraints",
			"double-pendulum",
		],
		[
			"events",
			"friction",
			"gravity",
			"gyro",
			"manipulation",
			"minimal",
			"minimal",
			"mixed",
			"mixed-shapes",
			"mixedshapes",
			"newtons-cradle",
			"pyramid",
		],
		[
			"ragdoll",
			"raycasting",
			"restitution",
			"rounded",
			"sensors",
			"sleeping",
			"slingshot",
			"soft-body",
			"sprites",
			"stack",
		],
		[
			"static-friction",
			"stress",
			"stress2",
			"svg",
			"terrain",
			"timescale",
			"views",
			"wrecking-ball",
		],
	];

	constructor(private helper: HelperService) {
		this.helper.init(this.constructor.name);
		this.helper.log("constructor");
	}
}
