import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';
import {PublicRoutingModule} from "./public-routing.module";



@NgModule({
  declarations: [
    ComingSoonComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
