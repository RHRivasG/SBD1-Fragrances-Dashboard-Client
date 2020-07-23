import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producer } from '../models/producer-model';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProducerService implements Resolve<Producer[]>{
  subscription: any
  
  get(): Observable<Producer[]> {
    return this.http.get<Producer[]>('/api/producers')
  }

  constructor(private http: HttpClient) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Producer[] | import("rxjs").Observable<Producer[]> | Promise<Producer[]> {
    return this.get();
  }
}
