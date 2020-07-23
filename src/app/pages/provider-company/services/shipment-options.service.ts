import { Injectable } from '@angular/core';
import { ShipmentOption } from 'src/app/models/shipment-option';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ShipmentOptionsService implements Resolve<ShipmentOption[]>{

  constructor() { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): ShipmentOption[] | import("rxjs").Observable<ShipmentOption[]> | Promise<ShipmentOption[]> {
    return [
      {
        id_emp_prov: 1,
        id_pais: 91,
        dias_entrega: 4,
        tipo_transporte: 'A',
        costo: 2.17
      }
    ]
  }
}
