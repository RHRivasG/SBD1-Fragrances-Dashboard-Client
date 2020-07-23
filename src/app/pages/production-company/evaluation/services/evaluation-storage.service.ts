import { Injectable } from '@angular/core';
import { EvalCriteria } from 'src/app/models/eval-criteria';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EvaluationStorageService implements Resolve<{criteria: EvalCriteria[], provider: number}>{
  criteria: EvalCriteria[]
  provider: number
  
  constructor() { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): { criteria: EvalCriteria[]; provider: number; } | import("rxjs").Observable<{ criteria: EvalCriteria[]; provider: number; }> | Promise<{ criteria: EvalCriteria[]; provider: number; }> {
    return {
      criteria: this.criteria,
      provider: this.provider
    }
  }

  get providerId(): number {return this.provider}

  store(criteria: EvalCriteria[], provider: number) {
    this.criteria = criteria
    this.provider = provider
  }
}
