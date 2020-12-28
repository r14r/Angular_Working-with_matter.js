import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
import { ManipulationPageComponent } from './pages/manipulation/manipulation.page.component';
import { MinimalExamplePageComponent } from './pages/minimal/minimal.page.component';
import { MixedPageComponent } from './pages/mixed/mixed.page.component';
import { MixedShapesPageComponent } from './pages/mixed-shapes/mixed-shapes.page.component';
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
import { Stress2PageComponent } from './pages/stress2/stress2.page.component';
import { StressPageComponent } from './pages/stress/stress.page.component';
import { SvgPageComponent } from './pages/svg/svg.page.component';
import { TerrainPageComponent } from './pages/terrain/terrain.page.component';
import { TimescalePageComponent } from './pages/timescale/timescale.page.component';
import { ViewsPageComponent } from './pages/views/views.page.component';
import { WreckingBallPageComponent } from './pages/wrecking-ball/wrecking-ball.page.component';
import { IndexPageComponent } from './pages/index/index.page.component';

const routes: Routes = [
	{ path: 'index', component: IndexPageComponent },
	{ path: 'air-friction', component: AirFrictionPageComponent },
	{ path: 'avalanche', component: AvalanchePageComponent },
	{ path: 'ball-pool', component: BallPoolPageComponent },
	{ path: 'bridge', component: BridgePageComponent },
	{ path: 'broadphase', component: BroadphasePageComponent },
	{ path: 'car', component: CarPageComponent },
	{ path: 'catapult', component: CatapultPageComponent },
	{ path: 'chains', component: ChainsPageComponent },
	{ path: 'circle-stack', component: CircleStackPageComponent },
	{ path: 'cloth', component: ClothPageComponent },
	{ path: 'collision-filtering', component: CollisionFilteringPageComponent },
	{ path: 'composite-manipulation', component: CompositeManipulationPageComponent },
	{ path: 'compound-stack', component: CompoundStackPageComponent },
	{ path: 'compound', component: CompoundPageComponent },
	{ path: 'concave', component: ConcavePageComponent },
	{ path: 'constraints', component: ConstraintsPageComponent },
	{ path: 'double-pendulum', component: DoublePendulumPageComponent },
	{ path: 'events', component: EventsPageComponent },
	{ path: 'friction', component: FrictionPageComponent },
	{ path: 'gravity', component: GravityPageComponent },
	{ path: 'gyro', component: GyroPageComponent },
	{ path: 'manipulation', component: ManipulationPageComponent },
	{ path: 'minimal', component: MinimalExamplePageComponent },
	{ path: 'minimal', component: MinimalExamplePageComponent },
	{ path: 'mixed-shapes', component: MixedShapesPageComponent },
	{ path: 'mixed', component: MixedPageComponent },
	{ path: 'mixedshapes', component: MixedShapesPageComponent },
	{ path: 'newtons-cradle', component: NewtonsCradlePageComponent },
	{ path: 'pyramid', component: PyramidPageComponent },
	{ path: 'ragdoll', component: RagdollPageComponent },
	{ path: 'raycasting', component: RaycastingPageComponent },
	{ path: 'restitution', component: RestitutionPageComponent },
	{ path: 'rounded', component: RoundedPageComponent },
	{ path: 'sensors', component: SensorsPageComponent },
	{ path: 'sleeping', component: SleepingPageComponent },
	{ path: 'slingshot', component: SlingshotPageComponent },
	{ path: 'soft-body', component: SoftBodyPageComponent },
	{ path: 'sprites', component: SpritesPageComponent },
	{ path: 'stack', component: StackPageComponent },
	{ path: 'static-friction', component: StaticFrictionPageComponent },
	{ path: 'stress', component: StressPageComponent },
	{ path: 'stress2', component: Stress2PageComponent },
	{ path: 'svg', component: SvgPageComponent },
	{ path: 'terrain', component: TerrainPageComponent },
	{ path: 'timescale', component: TimescalePageComponent },
	{ path: 'views', component: ViewsPageComponent },
	{ path: 'wrecking-ball', component: WreckingBallPageComponent },
	{ path: '', redirectTo: '/index', pathMatch: 'full' },
	{ path: '**', redirectTo: '/index', pathMatch: 'full' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { enableTracing: false })],
	exports: [RouterModule]
})
export class AppRoutingModule { }
