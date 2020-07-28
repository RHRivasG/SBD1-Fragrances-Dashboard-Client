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
import { InitialEvaluableProviderService } from './services/initial-evaluable-provider.service';
import { EfficiencyEvaluableProivderService } from './services/efficiency-evaluable-proivder.service';
import { IngredientService } from 'src/app/services/ingredient.service';
import { RawCriteriaService } from './services/raw-criteria.service';
import { EvaluationScaleComponent } from './evaluation-scale/evaluation-scale.component';

const routes: Routes = [
  {
    path: "",
    component: EvaluationHomeComponent,
    data: {
      animation: 'master'
    }
  },
  {
    path: "criteria",
    component: EvaluationCriteriaManagementComponent,
    resolve: {
      criteria: CriteriaService,
      rawCriteria: RawCriteriaService
    },
    data: {
      animation: 'slave'
    },
    runGuardsAndResolvers: 'always'
  },
  {
    path: "scales",
    component: EvaluationScaleComponent,
    resolve: {
      scales: ScaleService
    },
    data: {
      animation: 'slave'
    },
    runGuardsAndResolvers: 'always'
  },
  {
    path: "provider",
    component: EvaluateProviderComponent,
    resolve: {
      criteria: CriteriaService,
      providerInit: InitialEvaluableProviderService,
      providerEff: EfficiencyEvaluableProivderService
    },
    data: {
      animation: 'slave'
    }
  },
  {
    path: 'formula',
    component: EvaluateProviderFormulaComponent,
    resolve: {
      evalOptions: EvaluationStorageService,
      evalScales: ScaleService,
      providerCondition: PaymentConditionService,
      providerShipment: ShipmentOptionsService
    },
    data: {
      animation: 'slave'
    }
  },
  {
    path: "select-products",
    component: EvaluationSelectProductsComponent,
    resolve: {
      ingredients: IngredientService
    },
    data: {
      animation: 'slave'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EvaluationRoutingModule {}
