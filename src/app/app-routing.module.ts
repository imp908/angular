import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TestComponentComponent } from './testmodule/testcomponent/testcomponent.component';

const routes: Routes = [
  {
    path: 'ap',
    component: AppComponent
  },
  {
    path: 'ts',
    component: TestComponentComponent
  },
  { path: 'tss', redirectTo: '/ts', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

