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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductionCompanyRoutingModule {}
