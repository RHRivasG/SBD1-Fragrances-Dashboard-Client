import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatStepperModule } from '@angular/material/stepper'

import { AuthRoutingModule } from './auth-routing.module';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { AuthProductorsComponent } from './auth-productors/auth-productors.component';


@NgModule({
  declarations: [AuthLayoutComponent, AuthProductorsComponent],
  imports: [
    CommonModule,
    MatStepperModule,
    MatToolbarModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
