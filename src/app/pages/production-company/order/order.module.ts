import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { OrderRoutingModule } from "./order-routing.module";
import { OrderListComponent } from "./order-list/order-list.component";
import { OrderFormComponent } from "./order-form/order-form.component";
import { OrderProviderComponent } from "./order-provider/order-provider.component";
import { MatTableModule } from "@angular/material/table";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatSelectModule } from "@angular/material/select";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatListModule } from "@angular/material/list";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    OrderListComponent,
    OrderFormComponent,
    OrderProviderComponent,
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatGridListModule,
    MatListModule,
    MatListModule,
    MatCheckboxModule,
    FormsModule,
  ],
})
export class OrderModule {}
