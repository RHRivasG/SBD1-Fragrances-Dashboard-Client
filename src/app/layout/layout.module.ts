import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LayoutRoutingModule } from "./layout-routing.module";
import { NavbarComponent } from "./navbar/navbar.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
  ],
})
export class LayoutModule {}
