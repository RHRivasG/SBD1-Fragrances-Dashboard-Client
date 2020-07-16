import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { WithContractComponent } from "./with-contract/with-contract.component";
import { WithoutContractComponent } from "./without-contract/without-contract.component";
import { WithContractListComponent } from "./with-contract-list/with-contract-list.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "number",
        component: WithContractComponent,
      },
      {
        path: "without-contract",
        component: WithoutContractComponent,
      },
      {
        path: "",
        component: WithContractListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProviderRoutingModule {}
