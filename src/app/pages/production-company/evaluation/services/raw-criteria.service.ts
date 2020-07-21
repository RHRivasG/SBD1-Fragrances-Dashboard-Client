import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { RawCriteria } from 'src/app/models/raw-criteria';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class RawCriteriaService implements Resolve<RawCriteria[]> {

  constructor() { }

  public get(): RawCriteria[] | import('rxjs').Observable<RawCriteria[]> {
    return [
      {
        id: 1,
        nombre: 'Criterio de Condiciones de Pago',
        descripcion: `Criterio de evaluacion de una Evaluación inicial,
toma en consideracion las Condiciones de pago disponibles de una empresa proveedora`
      },
      {
        id: 2,
        nombre: 'Criterio de Alternativas de Envio',
        descripcion: `Criterio de evaluacion de una Evaluación inicial,
toma en consideracion las Alternativas de envío disponibles de una empresa proveedora`
      },
      {
        id: 3,
        nombre: 'Criterio de Eficiencia',
        descripcion: `Condicion de evaluacion de una Evaluacion Anual, toma en consideracion
			   el porcentaje de pedidos que fueron entregados correctamente.`
      },
    ]
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): RawCriteria[] | import("rxjs").Observable<RawCriteria[]> | Promise<RawCriteria[]> {
    return this.get()
  }

  match_by_id(id: number) {
    return criteria => criteria.id === id
  }

  public findById(id: number): Observable<RawCriteria> {
    let result = this.get()
    if (result instanceof Observable)
      return (result as Observable<RawCriteria[]>).pipe(
        map(lCriteria => {
          return lCriteria.filter(this.match_by_id(id))[0]
        })
      )
    else
      return of((result as RawCriteria[]).filter(this.match_by_id(id))[0])
  }
}
