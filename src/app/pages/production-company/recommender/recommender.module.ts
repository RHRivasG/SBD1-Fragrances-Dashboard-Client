import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecommenderRoutingModule } from './recommender-routing.module';
import { RecommenderComponent } from './recommender/recommender.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [RecommenderComponent],
  imports: [
    CommonModule,
    RecommenderRoutingModule,
    MatTableModule,
    MatIconModule,
    MatCardModule
  ]
})
export class RecommenderModule { }
