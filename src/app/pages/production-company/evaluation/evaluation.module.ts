import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvaluationRoutingModule } from './evaluation-routing.module';
import { EvaluationScaleComponent } from './evaluation-scale/evaluation-scale.component';

import { EvaluationHomeComponent } from './evaluation-home/evaluation-home.component';
import { EvaluationCardComponent } from './evaluation-card/evaluation-card.component'
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatRippleModule } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';
import { BreadcrumbModule, IconsModule } from 'angular-bootstrap-md';
import { EvaluationCriteriaManagementComponent } from './evaluation-criteria-management/evaluation-criteria-management.component'
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { EvaluateProviderComponent } from './evaluate-provider/evaluate-provider.component';
import { MatListModule } from '@angular/material/list';
import { RawCriteriaService } from './services/raw-criteria.service';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [EvaluationScaleComponent, EvaluationHomeComponent, EvaluationCardComponent, EvaluationCriteriaManagementComponent, EvaluateProviderComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatRippleModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatExpansionModule,
    BreadcrumbModule,
    IconsModule,
    MatRadioModule,
    MatTabsModule,
    MatGridListModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule,
    MatInputModule,
    MatDividerModule,
    EvaluationRoutingModule
  ],
  providers: [RawCriteriaService]
})
export class EvaluationModule { }
