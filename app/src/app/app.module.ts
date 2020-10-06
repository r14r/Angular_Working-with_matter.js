import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MixedShapesPageComponent } from './pages/mixed-shapes/mixed-shapes.page.component';
import { MinimalExamplePageComponent } from './pages/minimal/minimal.page.component';
import { WreckingBallPageComponent } from './pages/wrecking-ball/wrecking-ball.page.component';
import { AirFrictionPageComponent } from './pages/air-friction/air-friction.page.component';
import { AvalanchePageComponent } from './pages/avalanche/avalanche.page.component';
import { BallPoolPageComponent } from './pages/ball-pool/ball-pool.page.component';
import { BridgePageComponent } from './pages/bridge/bridge.page.component';
import { BroadphasePageComponent } from './pages/broadphase/broadphase.page.component';
import { CarPageComponent } from './pages/car/car.page.component';
import { CatapultPageComponent } from './pages/catapult/catapult.page.component';
import { ChainsPageComponent } from './pages/chains/chains.page.component';
import { CircleStackPageComponent } from './pages/circle-stack/circle-stack.page.component';
import { ClothPageComponent } from './pages/cloth/cloth.page.component';
import { CollisionFilteringPageComponent } from './pages/collision-filtering/collision-filtering.page.component';
import { CompositeManipulationPageComponent } from './pages/composite-manipulation/composite-manipulation.page.component';
import { CompoundPageComponent } from './pages/compound/compound.page.component';
import { CompoundStackPageComponent } from './pages/compound-stack/compound-stack.page.component';
import { ConcavePageComponent } from './pages/concave/concave.page.component';
import { ConstraintsPageComponent } from './pages/constraints/constraints.page.component';
import { DoublePendulumPageComponent } from './pages/double-pendulum/double-pendulum.page.component';
import { EventsPageComponent } from './pages/events/events.page.component';
import { FrictionPageComponent } from './pages/friction/friction.page.component';
import { GravityPageComponent } from './pages/gravity/gravity.page.component';
import { GyroPageComponent } from './pages/gyro/gyro.page.component';
import { IndexPageComponent } from './pages/index/index.page.component';
import { ManipulationPageComponent } from './pages/manipulation/manipulation.page.component';
import { MixedPageComponent } from './pages/mixed/mixed.page.component';
import { NewtonsCradlePageComponent } from './pages/newtons-cradle/newtons-cradle.page.component';
import { PyramidPageComponent } from './pages/pyramid/pyramid.page.component';
import { RagdollPageComponent } from './pages/ragdoll/ragdoll.page.component';
import { RaycastingPageComponent } from './pages/raycasting/raycasting.page.component';
import { RestitutionPageComponent } from './pages/restitution/restitution.page.component';
import { RoundedPageComponent } from './pages/rounded/rounded.page.component';
import { SensorsPageComponent } from './pages/sensors/sensors.page.component';
import { SleepingPageComponent } from './pages/sleeping/sleeping.page.component';
import { SlingshotPageComponent } from './pages/slingshot/slingshot.page.component';
import { SoftBodyPageComponent } from './pages/soft-body/soft-body.page.component';
import { SpritesPageComponent } from './pages/sprites/sprites.page.component';
import { StackPageComponent } from './pages/stack/stack.page.component';
import { StaticFrictionPageComponent } from './pages/static-friction/static-friction.page.component';
import { StressPageComponent } from './pages/stress/stress.page.component';
import { Stress2PageComponent } from './pages/stress2/stress2.page.component';
import { SvgPageComponent } from './pages/svg/svg.page.component';
import { TerrainPageComponent } from './pages/terrain/terrain.page.component';
import { TimescalePageComponent } from './pages/timescale/timescale.page.component';
import { ViewsPageComponent } from './pages/views/views.page.component';

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
		ViewsPageComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
