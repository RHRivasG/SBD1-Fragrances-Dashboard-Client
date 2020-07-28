import { Injectable } from '@angular/core';
import { EvalScale } from 'src/app/models/eval-scale';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface ScaleVM {
  fechai: any,
  fechaf: any,
  rangoi: number,
  rangf: number
}

@Injectable({
  providedIn: 'root'
})
export class ScaleService implements Resolve<EvalScale[]> {

  constructor(private http: HttpClient) {
  }

  get():Observable<EvalScale[]> {
    return this.http.get<EvalScale[]>(`/api/producers/scales`)
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): EvalScale[] | import("rxjs").Observable<EvalScale[]> | Promise<EvalScale[]> {
    return this.get()
  }

  postScale(e: ScaleVM) {
    console.log(e)
    return this.http.post('/api/producers/scales/new', e, {responseType: 'text/plain' as 'json'})
  }

  cancelScale(e: EvalScale) {
    return this.http.patch(`/api/producers/scale/cancel?eval_id=${e.fechai}`, null, {responseType: 'text/plain' as 'json'})
  }

  updateScale(e) {
    console.log(e)
    return this.http.put(`/api/producers/scale/update`, e, {responseType: 'text/plain' as 'json'})
  }
}
