import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { AuthOptionsResolver } from './resolvers/auth-options-resolver';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthLayoutComponent,
    resolve: {
      logOptions: AuthOptionsResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
  
})
export class AuthRoutingModule { }
