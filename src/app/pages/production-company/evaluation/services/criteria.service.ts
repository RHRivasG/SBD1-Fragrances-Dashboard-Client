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

  postCriteria(c) {
    console.log(c)
    return this.http.post('/api/producers/criteria/new', c, { responseType: 'text/plain' as 'json' })
  }

  cancelCriteria(c) {
    return this.http.patch(`/api/producers/criteria/cancel?criteria_id=${c.id_criterio}&date_epoch=${c.fechai}`, null, {responseType: 'text/plain' as 'json'})
  }

  updateCriteria(e) {
    console.log(e)
    return this.http.put(`/api/producers/criteria/update`, e, {responseType: 'text/plain' as 'json'})
  }

  
}
