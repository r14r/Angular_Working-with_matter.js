import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { AirFrictionPageComponent } from "./pages/air-friction/page.component";
import { AvalanchePageComponent } from "./pages/avalanche/page.component";
import { BallPoolPageComponent } from "./pages/ball-pool/page.component";
import { BridgePageComponent } from "./pages/bridge/page.component";
import { BroadphasePageComponent } from "./pages/broadphase/page.component";
import { CarPageComponent } from "./pages/car/page.component";
import { CatapultPageComponent } from "./pages/catapult/page.component";
import { ChainsPageComponent } from "./pages/chains/page.component";
import { CircleStackPageComponent } from "./pages/circle-stack/page.component";
import { ClothPageComponent } from "./pages/cloth/page.component";
import { CollisionFilteringPageComponent } from "./pages/collision-filtering/page.component";
import { CompositeManipulationPageComponent } from "./pages/composite-manipulation/page.component";
import { CompoundPageComponent } from "./pages/compound/page.component";
import { CompoundStackPageComponent } from "./pages/compound-stack/page.component";
import { ConcavePageComponent } from "./pages/concave/page.component";
import { ConstraintsPageComponent } from "./pages/constraints/page.component";
import { DoublePendulumPageComponent } from "./pages/double-pendulum/page.component";
import { EventsPageComponent } from "./pages/events/page.component";
import { FrictionPageComponent } from "./pages/friction/page.component";
import { GravityPageComponent } from "./pages/gravity/page.component";
import { GyroPageComponent } from "./pages/gyro/page.component";
import { IndexPageComponent } from "./pages/index/page.component";
import { ManipulationPageComponent } from "./pages/manipulation/page.component";
import { MinimalExamplePageComponent } from "./pages/minimal/page.component";
import { MixedPageComponent } from "./pages/mixed/page.component";
import { MixedShapesPageComponent } from "./pages/mixed-shapes/page.component";
import { NewtonsCradlePageComponent } from "./pages/newtons-cradle/page.component";
import { PyramidPageComponent } from "./pages/pyramid/page.component";
import { RagdollPageComponent } from "./pages/ragdoll/page.component";
import { RaycastingPageComponent } from "./pages/raycasting/page.component";
import { RestitutionPageComponent } from "./pages/restitution/page.component";
import { RoundedPageComponent } from "./pages/rounded/page.component";
import { SensorsPageComponent } from "./pages/sensors/page.component";
import { SleepingPageComponent } from "./pages/sleeping/page.component";
import { SlingshotPageComponent } from "./pages/slingshot/page.component";
import { SoftBodyPageComponent } from "./pages/soft-body/page.component";
import { SpritesPageComponent } from "./pages/sprites/page.component";
import { StackPageComponent } from "./pages/stack/page.component";
import { StaticFrictionPageComponent } from "./pages/static-friction/page.component";
import { Stress2PageComponent } from "./pages/stress2/page.component";
import { StressPageComponent } from "./pages/stress/page.component";
import { SvgPageComponent } from "./pages/svg/page.component";
import { TerrainPageComponent } from "./pages/terrain/page.component";
import { TimescalePageComponent } from "./pages/timescale/page.component";
import { ViewsPageComponent } from "./pages/views/page.component";
import { WreckingBallPageComponent } from "./pages/wrecking-ball/page.component";

import { HelperService } from "./services/helper.service";

@NgModule({
	declarations: [
		AppComponent,
		MixedShapesPageComponent,
		MinimalExamplePageComponent,
		WreckingBallPageComponent,
		AirFrictionPageComponent,
		AvalanchePageComponent,
		BallPoolPageComponent,
		BridgePageComponent,
		BroadphasePageComponent,
		CarPageComponent,
		CatapultPageComponent,
		ChainsPageComponent,
		CircleStackPageComponent,
		ClothPageComponent,
		CollisionFilteringPageComponent,
		CompositeManipulationPageComponent,
		CompoundPageComponent,
		CompoundStackPageComponent,
		ConcavePageComponent,
		ConstraintsPageComponent,
		DoublePendulumPageComponent,
		EventsPageComponent,
		FrictionPageComponent,
		GravityPageComponent,
		GyroPageComponent,
		IndexPageComponent,
		ManipulationPageComponent,
		MixedPageComponent,
		NewtonsCradlePageComponent,
		PyramidPageComponent,
		RagdollPageComponent,
		RaycastingPageComponent,
		RestitutionPageComponent,
		RoundedPageComponent,
		SensorsPageComponent,
		SleepingPageComponent,
		SlingshotPageComponent,
		SoftBodyPageComponent,
		SpritesPageComponent,
		StackPageComponent,
		StaticFrictionPageComponent,
		StressPageComponent,
		Stress2PageComponent,
		SvgPageComponent,
		TerrainPageComponent,
		TimescalePageComponent,
		ViewsPageComponent,
	],
	imports: [BrowserModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {
	constructor(private helper: HelperService) {
		this.helper.init(this.constructor.name);
		this.helper.log("constructor");
	}
}
