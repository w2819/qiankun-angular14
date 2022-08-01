import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {EmptyRouteComponent} from "./component/empty/empty.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {UserCenterIndexComponent} from "./index/index.component";

@NgModule({
  declarations: [
    AppComponent,
    EmptyRouteComponent,
    UserCenterIndexComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
