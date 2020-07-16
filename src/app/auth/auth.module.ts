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
import { AuthCardComponent } from './auth-card/auth-card.component';
import { MatRippleModule } from '@angular/material/core';
import { AuthOptionsResolver } from './resolvers/auth-options-resolver';
import { HttpClientModule } from '@angular/common/http';
import { ImageService } from './services/image-service.service';

@NgModule({
  declarations: [AuthLayoutComponent, AuthProductorsComponent, AuthTypeComponent, AuthCardComponent],
  imports: [
    CommonModule,
    MatStepperModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatRippleModule,
    BrowserAnimationsModule,
    MatGridListModule,
    ReactiveFormsModule,
    MatToolbarModule,
    HttpClientModule,
    AuthRoutingModule
  ],
  providers: [ AuthOptionsResolver, ImageService ]
})
export class AuthModule { }
