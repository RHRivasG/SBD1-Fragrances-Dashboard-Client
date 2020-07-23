import { Injectable } from '@angular/core';
import { EvalScale } from 'src/app/models/eval-scale';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ScaleService implements Resolve<EvalScale[]> {

  constructor() {
    
    
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): EvalScale[] | import("rxjs").Observable<EvalScale[]> | Promise<EvalScale[]> {
    return [
      {
        fechai: new Date(),
        fechaf: null,
        rangf: 10,
        rangoi: 1,
        id_emp_prod: 1
      },
      {
        fechai: new Date(),
        fechaf: null,
        rangf: 5,
        rangoi: 1,
        id_emp_prod: 1
      },
    ]
  }
}
