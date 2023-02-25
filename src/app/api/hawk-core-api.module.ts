import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HawkCoreApiInterceptor} from "./services/hawk-core-api.interceptor";
import {HTTP_INTERCEPTORS} from "@angular/common/http";



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HawkCoreApiInterceptor,
      multi: true,
    }
  ]
})
export class HawkCoreApiModule { }
