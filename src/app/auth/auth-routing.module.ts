import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { AuthProductorsComponent } from './auth-productors/auth-productors.component';
import { AuthStep1Component } from './auth-step1/auth-step1.component';


const routes: Routes = [
  {
    path: 'auth',
    component: AuthLayoutComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/auth'
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/auth'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
