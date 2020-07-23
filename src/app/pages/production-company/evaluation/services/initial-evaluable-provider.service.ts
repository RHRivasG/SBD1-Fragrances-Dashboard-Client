import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Provider } from 'src/app/models/provider-model';

@Injectable({
  providedIn: 'root'
})
export class InitialEvaluableProviderService implements Resolve<Provider[]> {

  constructor(private http: HttpClient) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Provider[] | import("rxjs").Observable<Provider[]> | Promise<Provider[]> {
    return this.http.get<Provider[]>('/api/providers/evaluable_initial_by/1')
  }
}
