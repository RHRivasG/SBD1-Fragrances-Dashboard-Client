import { Injectable } from '@angular/core';
import { IfraIngredient } from '../models/ifra-ingredient';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { EvaluationStorageService } from '../pages/production-company/evaluation/services/evaluation-storage.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IngredientService implements Resolve<IfraIngredient[]>{

  constructor(private http: HttpClient, private store: EvaluationStorageService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IfraIngredient[] | import("rxjs").Observable<IfraIngredient[]> | Promise<IfraIngredient[]> {
    return this.http.get<IfraIngredient[]>(`/api/providers/${this.store.providerId}/ingredients`)
  }

  pushContract(contract: {id_emp_prod: number, id_emp_prov: number, exclusividad: boolean, fecha_emision: Date, fecha_cancelado: Date | null, motivo_cancelado: string | null}) {
    this.http.post('/api/providers/contract/new', contract).subscribe(res => res)
  }
}
