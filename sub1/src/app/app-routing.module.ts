import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmptyRouteComponent} from "./component/empty/empty.component";
import {UserCenterIndexComponent} from "./index/index.component";
import {APP_BASE_HREF} from "@angular/common";

const routes: Routes = [
  {path: '', redirectTo: 'index', pathMatch: 'full'},
  {path: 'index', component: UserCenterIndexComponent,},
  {path: '**', component: EmptyRouteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

  // @ts-ignore
  providers: [{provide: APP_BASE_HREF, useValue: window.__POWERED_BY_QIANKUN__ ? '/sub1' : '/'}]
})
export class AppRoutingModule { }
