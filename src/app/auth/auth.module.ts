import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatStepperModule } from '@angular/material/stepper'

import { AuthRoutingModule } from './auth-routing.module';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { AuthProductorsComponent } from './auth-productors/auth-productors.component';
import { AuthStep1Component } from './auth-step1/auth-step1.component';


@NgModule({
  declarations: [AuthLayoutComponent, AuthProductorsComponent, AuthStep1Component],
  imports: [
    CommonModule,
    MatStepperModule,
    MatToolbarModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
