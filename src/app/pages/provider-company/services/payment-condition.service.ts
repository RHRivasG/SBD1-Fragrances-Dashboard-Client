import { Injectable } from '@angular/core';
import { PaymentCondition } from 'src/app/models/payment-condition';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PaymentConditionService implements Resolve<PaymentCondition[]> {

  constructor() {

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): PaymentCondition[] | import("rxjs").Observable<PaymentCondition[]> | Promise<PaymentCondition[]> {
    return [
      {
        id: 1,
        id_emp_prov: 1,
        tipo: 'AP',
        cuotas: 3
      },
      {
        id: 5,
        id_emp_prov: 1,
        tipo: 'C',
        cuotas: null
      }
    ]
  }
}
