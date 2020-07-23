import { Injectable } from '@angular/core';
import { Provider } from '../models/provider-model';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProvidersService implements Resolve<Provider[]> {
  
  subscription: any

  constructor(private http: HttpClient) { }

  get(): Observable<Provider[]> {
    return this.http.get<Provider[]>('/api/providers')
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Provider[] | import("rxjs").Observable<Provider[]> | Promise<Provider[]> {
    return this.get()
  }
}
