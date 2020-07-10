import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProductionCompanyRoutingModule } from "./production-company-routing.module";
import { ProductionCompanyComponent } from "./production-company.component";

@NgModule({
  declarations: [ProductionCompanyComponent],
  imports: [CommonModule, ProductionCompanyRoutingModule],
})
export class ProductionCompanyModule {}
