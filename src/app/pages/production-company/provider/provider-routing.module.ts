import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { WithContractComponent } from "./with-contract/with-contract.component";
import { WithoutContractComponent } from "./without-contract/without-contract.component";
import { WithContractListComponent } from "./with-contract-list/with-contract-list.component";
import { WithoutContractListComponent } from "./without-contract-list/without-contract-list.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "with-contract",
        component: WithContractComponent,
      },
      {
        path: "without-contract",
        component: WithoutContractComponent,
      },
      {
        path: "with-contract-list",
        component: WithContractListComponent,
      },
      {
        path: "without-contract-list",
        component: WithoutContractListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProviderRoutingModule {}
