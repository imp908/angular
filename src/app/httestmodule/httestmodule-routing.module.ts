import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HtTestComponent } from './ht-test/ht-test.component';


const routes: Routes = [{
  path: 'ht',
  component: HtTestComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HtTestRoutingModule { }
