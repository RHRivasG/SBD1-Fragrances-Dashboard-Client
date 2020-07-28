import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { OrderListComponent } from "./order-list/order-list.component";
import { OrderProviderComponent } from "./order-provider/order-provider.component";
import { OrderFormComponent } from "./order-form/order-form.component";

const routes: Routes = [
  {
    path: "",
    component: OrderListComponent,
  },
  {
    path: "select-provider",
    component: OrderProviderComponent,
  },
  {
    path: "form",
    component: OrderFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderRoutingModule {}
