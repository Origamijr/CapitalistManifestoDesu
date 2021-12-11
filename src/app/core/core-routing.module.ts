import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [{
  path: 'home',
  loadChildren: () => import('../modules/home/home.module').then(m => m.HomeModule)
}, {
  path: 'f',
  loadChildren: () => import('../modules/farrago/farrago.module').then(m => m.FarragoModule)
}, {
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
}, {
  path: '**',
  component: NotFoundComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
