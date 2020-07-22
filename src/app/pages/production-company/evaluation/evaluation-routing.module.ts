import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EvaluationHomeComponent } from "./evaluation-home/evaluation-home.component";
import { EvaluationCriteriaManagementComponent } from "./evaluation-criteria-management/evaluation-criteria-management.component";
import { EvaluateProviderComponent } from "./evaluate-provider/evaluate-provider.component";
import { CriteriaService } from "./services/criteria.service";
import { EvaluationSelectProductsComponent } from "./evaluation-select-products/evaluation-select-products.component";

const routes: Routes = [
  {
    path: "",
    component: EvaluationHomeComponent,
  },
  {
    path: "criteria",
    component: EvaluationCriteriaManagementComponent,
  },
  {
    path: "provider",
    component: EvaluateProviderComponent,
    resolve: {
      criteria: CriteriaService,
    },
  },
  {
    path: "select-products",
    component: EvaluationSelectProductsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EvaluationRoutingModule {}
