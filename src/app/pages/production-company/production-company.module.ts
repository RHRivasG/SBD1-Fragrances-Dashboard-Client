import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProductionCompanyRoutingModule } from "./production-company-routing.module";
import { ProductionCompanyComponent } from "./production-company.component";
import { EvaluationModule } from "./evaluation/evaluation.module";
import { RusuerDialogComponent } from './rusuer-dialog/rusuer-dialog.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ProductionCompanyComponent, RusuerDialogComponent],
  imports: [CommonModule,
            ProductionCompanyRoutingModule,
            MatButtonModule,
            EvaluationModule],
})
export class ProductionCompanyModule {}
