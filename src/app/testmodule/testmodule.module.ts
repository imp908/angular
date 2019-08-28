import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestmoduleRoutingModule } from './testmodule-routing.module';
import { TestComponentComponent } from './testcomponent/testcomponent.component';

@NgModule({
  declarations: [TestComponentComponent],
  imports: [
    CommonModule,
    TestmoduleRoutingModule
  ],
})
export class TestmoduleModule { }
