import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatStepperModule } from '@angular/material/stepper'

import { AuthRoutingModule } from './auth-routing.module';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { AuthProductorsComponent } from './auth-productors/auth-productors.component';
import { AuthTypeComponent } from './auth-type/auth-type.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [AuthLayoutComponent, AuthProductorsComponent, AuthTypeComponent],
  imports: [
    CommonModule,
    MatStepperModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatGridListModule,
    ReactiveFormsModule,
    MatToolbarModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
