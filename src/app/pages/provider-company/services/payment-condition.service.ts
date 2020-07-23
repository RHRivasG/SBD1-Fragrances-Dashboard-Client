import { Injectable } from '@angular/core';
import { PaymentCondition } from 'src/app/models/payment-condition';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentConditionService implements Resolve<PaymentCondition[]> {

  constructor(private http: HttpClient) {

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): PaymentCondition[] | import("rxjs").Observable<PaymentCondition[]> | Promise<PaymentCondition[]> {
    return this.http.get<PaymentCondition[]>('/api/providers/1/payment_conditions')
  }
}
