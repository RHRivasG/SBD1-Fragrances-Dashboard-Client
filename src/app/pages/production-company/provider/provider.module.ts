import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { MatTableModule } from "@angular/material/table";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatGridListModule } from "@angular/material/grid-list";

import { ProviderRoutingModule } from "./provider-routing.module";
import { WithContractComponent } from "./with-contract/with-contract.component";
import { WithoutContractComponent } from "./without-contract/without-contract.component";
import { WithContractListComponent } from "./with-contract-list/with-contract-list.component";
import { WithoutContractListComponent } from "./without-contract-list/without-contract-list.component";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [
    WithContractComponent,
    WithoutContractComponent,
    WithContractListComponent,
    WithoutContractListComponent,
  ],
  imports: [
    CommonModule,
    ProviderRoutingModule,
    MatListModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
  ],
})
export class ProviderModule {}
