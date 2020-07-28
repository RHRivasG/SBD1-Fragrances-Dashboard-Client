import { Injectable } from '@angular/core';
import { PaymentCondition } from 'src/app/models/payment-condition';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { EvaluationStorageService } from '../../production-company/evaluation/services/evaluation-storage.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentConditionService implements Resolve<PaymentCondition[]> {

  constructor(private http: HttpClient, private providerService: EvaluationStorageService) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): PaymentCondition[] | import("rxjs").Observable<PaymentCondition[]> | Promise<PaymentCondition[]> {
    return this.http.get<PaymentCondition[]>(`/api/providers/payment_conditions/${this.providerService.providerId}`)
  }
}
