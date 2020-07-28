import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecommenderRoutingModule } from './recommender-routing.module';
import { RecommenderComponent } from './recommender/recommender.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [RecommenderComponent],
  imports: [
    CommonModule,
    RecommenderRoutingModule,
    MatTableModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatListModule,
    MatChipsModule,
    MatDividerModule
  ]
})
export class RecommenderModule { }
