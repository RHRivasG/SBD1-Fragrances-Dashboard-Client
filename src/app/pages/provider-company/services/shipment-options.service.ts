import { Injectable } from '@angular/core';
import { ShipmentOption } from 'src/app/models/shipment-option';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShipmentOptionsService implements Resolve<ShipmentOption[]>{

  constructor(private http: HttpClient) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): ShipmentOption[] | import("rxjs").Observable<ShipmentOption[]> | Promise<ShipmentOption[]> {
    return this.http.get<ShipmentOption[]>('/api/providers/1/shipment_options')
  }
}
