import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { EvalCriteria } from 'src/app/models/eval-criteria';
import { Provider } from 'src/app/models/provider-model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CriteriaService implements Resolve<EvalCriteria[]> {

  constructor(private http: HttpClient) { }
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): EvalCriteria[] | import("rxjs").Observable<EvalCriteria[]> | Promise<EvalCriteria[]> {
    return this.http.get<EvalCriteria[]>('/api/producers/1/criteria')
  }

  public evaluableBy(id: number, evaltype: 'I' | 'E'): (provider: Provider) => boolean {
    return (provider: Provider) => (evaltype == 'I' && provider.id < id) || (evaltype == 'E' && provider.id >= id)
  }
}
