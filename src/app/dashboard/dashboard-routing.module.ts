import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NavbarComponent } from "./navbar/navbar.component";
import { ProductionCompanyModule } from "../pages/production-company/production-company.module";
import { ProviderCompanyModule } from "../pages/provider-company/provider-company.module";
import { AuthGuard } from "../auth/guard/auth.guard";

const routes: Routes = [
  {
    path: "",
    component: NavbarComponent,
    children: [
      {
        path: "productor",
        loadChildren: () => ProductionCompanyModule,
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
      },
      {
        path: "provider",
        loadChildren: () => ProviderCompanyModule,
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
