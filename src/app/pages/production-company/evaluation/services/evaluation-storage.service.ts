import { Injectable } from '@angular/core';
import { EvalCriteria } from 'src/app/models/eval-criteria';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EvaluationStorageService implements Resolve<{criteria?: EvalCriteria[], provider?: number} | {efficiency?: string}>{
  
  constructor() { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): { criteria: EvalCriteria[]; provider: number} | {efficiency?: string } | import("rxjs").Observable<{ criteria: EvalCriteria[]; provider: number} | {efficiency?: string }> | Promise<{ criteria: EvalCriteria[]; provider: number} | {efficiency?: string }> {
    return {
      criteria: JSON.parse(localStorage.getItem('criteria')),
      provider: JSON.parse(localStorage.getItem('providerId'))
    }
  }

  get providerId(): number {
    return JSON.parse(localStorage.getItem('providerId'))
  }

  get criteria() {
    return JSON.parse(localStorage.getItem('criteria'))
  }
  
  get evalType() {
    return this.criteria[0]?.tipoformula
  }
  
  store(criteria: EvalCriteria[], provider: number) {
    localStorage.setItem('providerId', provider.toString())
    localStorage.setItem('criteria', JSON.stringify(criteria))
  }
}
