import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { EvalCriteria } from 'src/app/models/eval-criteria';

@Injectable({
  providedIn: 'root'
})
export class CriteriaService implements Resolve<EvalCriteria[]> {

  constructor() { }
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): EvalCriteria[] | import("rxjs").Observable<EvalCriteria[]> | Promise<EvalCriteria[]> {
    return [
      {
        fechai: new Date(),
        fechaf: null,
        tipoFormula: 'I',
        peso: 33,
        id_emp_prod: 1,
        id_criterio: 1
      },
      {
        fechai: new Date("31-01-2019"),
        fechaf: null,
        tipoFormula: 'I',
        peso: 67,
        id_emp_prod: 1,
        id_criterio: 2
      },
      {
        fechai: new Date("23-03-2019"),
        fechaf: null,
        tipoFormula: 'E',
        peso: 67,
        id_emp_prod: 1,
        id_criterio: 3
      }
    ]
  }
}
