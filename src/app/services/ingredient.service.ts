import { Injectable } from '@angular/core';
import { IfraIngredient } from '../models/ifra-ingredient';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { EvaluationStorageService } from '../pages/production-company/evaluation/services/evaluation-storage.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface IngredientsQuery {
  ifra: IfraIngredient[],
  others: any []
}

@Injectable({
  providedIn: 'root'
})
export class IngredientService implements Resolve<IngredientsQuery>{

  constructor(private http: HttpClient, private store: EvaluationStorageService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IngredientsQuery | Observable<IngredientsQuery> | Promise<IngredientsQuery> {
    return this.http.get<IngredientsQuery>(`/api/providers/${this.store.providerId}/ingredients`).pipe(map(res => {console.log(res); return res}))
  }

  pushContract(contract: {id_emp_prod: number, id_emp_prov: number, exclusividad: boolean, fecha_emision: Date | string, fecha_cancelado: Date | null, motivo_cancelado: string | null}) : Observable<any> {
    return this.http.post('/api/providers/contract/new', contract)
  }
}
