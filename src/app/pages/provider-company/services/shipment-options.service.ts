import { Injectable } from '@angular/core';
import { ShipmentOption } from 'src/app/models/shipment-option';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { EvaluationStorageService } from '../../production-company/evaluation/services/evaluation-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ShipmentOptionsService implements Resolve<ShipmentOption[]>{

  constructor(private http: HttpClient, private providerService: EvaluationStorageService) { }
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): ShipmentOption[] | import("rxjs").Observable<ShipmentOption[]> | Promise<ShipmentOption[]> {
    return this.http.get<ShipmentOption[]>(`/api/providers/shipment_options/${this.providerService.providerId}`)
  }
}
