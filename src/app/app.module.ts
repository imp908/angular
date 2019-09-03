import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestmoduleModule } from './testmodule/testmodule.module';
import { TestmoduleRoutingModule } from '../app//testmodule/testmodule-routing.module';
import { HtTestModule } from './httestmodule/httestmodule.module';
import { HtTestRoutingModule } from './httestmodule/httestmodule-routing.module';
@NgModule({
  declarations: [
    AppComponent,
  ],  
  imports: [
    BrowserModule,
    AppRoutingModule,
    TestmoduleRoutingModule,
    TestmoduleModule,
    HtTestModule,
    HtTestRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
