import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderCompanyRoutingModule } from './provider-company-routing.module';
import { ProviderCompanyComponent } from './provider-company.component';


@NgModule({
  declarations: [ProviderCompanyComponent],
  imports: [
    CommonModule,
    ProviderCompanyRoutingModule
  ]
})
export class ProviderCompanyModule { }
