import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponentComponent } from './testcomponent/testcomponent.component';

const routes: Routes = [
  {
    path: 'tsm',
    component: TestComponentComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TestmoduleRoutingModule { }