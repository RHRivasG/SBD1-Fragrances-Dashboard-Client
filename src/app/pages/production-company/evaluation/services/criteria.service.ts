import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { EvalCriteria } from 'src/app/models/eval-criteria';
import { Provider } from 'src/app/models/provider-model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CriteriaService implements Resolve<EvalCriteria[]> {

  constructor(private http: HttpClient) { }
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): EvalCriteria[] | import("rxjs").Observable<EvalCriteria[]> | Promise<EvalCriteria[]> {
    return this.http.get<EvalCriteria[]>('/api/producers/criteria').pipe(
      map(res => {
        console.log(res)
        return res
      })
    )
  }
}
