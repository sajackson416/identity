import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ParallaxComponent} from './parallax/parallax.component';

const routes: Routes = [
  {path: 'parallax', component: ParallaxComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
