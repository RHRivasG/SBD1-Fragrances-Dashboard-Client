import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecommenderService implements Resolve<any[]>{

  constructor(private http: HttpClient) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any[] | import("rxjs").Observable<any[]> | Promise<any[]> {
    return this.http.get<any[]>('/api/recommender/source')
  }
}
