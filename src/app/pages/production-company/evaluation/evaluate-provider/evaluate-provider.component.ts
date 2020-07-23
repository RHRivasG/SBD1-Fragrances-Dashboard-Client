import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, filter } from 'rxjs/operators'
import { EvalCriteria } from 'src/app/models/eval-criteria';
import { Observable } from 'rxjs';
import { RawCriteriaService } from '../services/raw-criteria.service';
import { Enterprise, fromProvider } from 'src/app/models/enterprise';
import { CriteriaService } from '../services/criteria.service';
import { AuthOptionsResolver } from 'src/app/auth/resolvers/auth-options-resolver';
import { FormGroup, FormControl } from '@angular/forms';
import { MatSelectionList } from '@angular/material/list';
import { EvaluationStorageService } from '../services/evaluation-storage.service';


/*function atLeast(limit = 1) {
  return (fg: FormGroup) => {
    return Object.keys(fg.controls)
      .reduce((acc, key) => acc + (!fg.controls[key].value ? 1 : 0), 0) >= limit ? {atLeast: true} : null;
    
  }
}*/

@Component({
  selector: 'app-evaluate-provider',
  templateUrl: './evaluate-provider.component.html',
  styleUrls: ['./evaluate-provider.component.scss']
})
export class EvaluateProviderComponent implements OnInit {

  showInitial = true
  source: Observable<EvalCriteria[]>

  checkId: number;

  constructor(private router: Router, private route: ActivatedRoute, private rawService: RawCriteriaService, private criteriaService: CriteriaService, private providerService: AuthOptionsResolver, private evalStorage: EvaluationStorageService) { }

  /*
  get checkForm(): Observable<FormGroup> {
    return this.providerSource
      .pipe(
        map(lV => {
          return lV.reduce(
            (fg, v) => {
              fg.addControl(v.name, new FormControl(false))
              return fg;
            }
            ,
            new FormGroup({}, atLeast(1)))
        })
      )
      }*/
  
  get providerSource(): Observable<Enterprise[]> {
    return this.providerService.getProviders()
      .pipe(
        map(lprov =>
          lprov
            .filter(this.criteriaService.evaluableBy( 2, this.showInitial ? 'I' : 'E' ))
            .map(fromProvider)
           ),
      )
  }

  ngOnInit(): void {
    this.source = this.route.data.pipe(
      map(resolve => resolve.criteria),
    )
  }

  get criteria(): Observable<EvalCriteria[]> {
    return this.source.pipe(
      map(lCriteria => {
        return lCriteria
          .filter(sCriteria => (this.showInitial && (sCriteria.tipoFormula == 'I')) || (!this.showInitial && (sCriteria.tipoFormula == 'E')))
      })
    )
  }

  getCriteriaNameById(id: number): Observable<string> {
    return this.rawService.findById(id)
      .pipe(
        map(criteria => criteria.nombre)
      )
  }

  invalid(list: MatSelectionList) {
    return !this.checkId || list.selectedOptions.selected.length == 0 || list.selectedOptions.selected.reduce((acc, c) => acc + c.value.peso, 0) != 100
  }

  next(criteriaList: MatSelectionList) {
    this.evalStorage.store(
      criteriaList.selectedOptions.selected.map(v => v.value),
      this.checkId
    )
    this.router.navigate(['../formula'], {relativeTo: this.route})
  }

}
