import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HtTestRoutingModule } from './httestmodule-routing.module';
import { HtTestComponent }  from './ht-test/ht-test.component';

import { HotTableModule } from '@handsontable/angular';

@NgModule({
  declarations: [HtTestComponent],
  imports: [
    CommonModule,
    HtTestRoutingModule,
    HotTableModule
  ]
})
export class HtTestModule { }
