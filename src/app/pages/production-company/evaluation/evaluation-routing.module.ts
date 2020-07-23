import { EvaluateProviderFormulaComponent } from './evaluate-provider-formula/evaluate-provider-formula.component';
import { EvaluationStorageService } from './services/evaluation-storage.service';
import { ScaleService } from './services/scale.service';
import { PaymentConditionService } from '../../provider-company/services/payment-condition.service';
import { ShipmentOptionsService } from '../../provider-company/services/shipment-options.service';
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
      criteria: CriteriaService
    },
  },
  {
    path: 'formula',
    component: EvaluateProviderFormulaComponent,
    resolve: {
      evalOptions: EvaluationStorageService,
      evalScales: ScaleService,
      providerCondition: PaymentConditionService,
      providerShipment: ShipmentOptionsService
    }
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
