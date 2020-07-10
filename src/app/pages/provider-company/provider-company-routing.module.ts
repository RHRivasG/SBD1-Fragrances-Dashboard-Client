import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProviderCompanyComponent } from "./provider-company.component";

const routes: Routes = [
  {
    path: "",
    component: ProviderCompanyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProviderCompanyRoutingModule {}
