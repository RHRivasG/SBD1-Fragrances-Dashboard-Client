import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductionCompanyComponent } from "./production-company.component";
import { ProviderModule } from "./provider/provider.module";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: ProductionCompanyComponent,
      },
      {
        path: "providers",
        loadChildren: () => ProviderModule,
      },
      {
        path: "evaluation",
        loadChildren: () => import('./evaluation/evaluation.module').then(m => m.EvaluationModule)
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductionCompanyRoutingModule {}
