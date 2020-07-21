import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProductionCompanyRoutingModule } from "./production-company-routing.module";
import { ProductionCompanyComponent } from "./production-company.component";
import { EvaluationModule } from './evaluation/evaluation.module';

@NgModule({
  declarations: [ProductionCompanyComponent],
  imports: [CommonModule, ProductionCompanyRoutingModule, EvaluationModule],
})
export class ProductionCompanyModule {}
