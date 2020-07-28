import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecommenderComponent } from './recommender/recommender.component';
import { RecommenderService } from './services/recommender.service';


const routes: Routes = [
  {
    path: '',
    component: RecommenderComponent,
    resolve: {
      source: RecommenderService
    },
    data: {
      animation: 'slave'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecommenderRoutingModule { }
