import { Injectable } from '@angular/core';
import { EvalScale } from 'src/app/models/eval-scale';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ScaleService implements Resolve<EvalScale[]> {

  constructor(private http: HttpClient) {
    
    
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): EvalScale[] | import("rxjs").Observable<EvalScale[]> | Promise<EvalScale[]> {
    return this.http.get<EvalScale[]>(`/api/producers/scales`)
  }
}
