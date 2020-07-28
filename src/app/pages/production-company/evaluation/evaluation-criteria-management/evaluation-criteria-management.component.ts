import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators'
import { RawCriteriaService } from '../services/raw-criteria.service';
import { EvalCriteria } from 'src/app/models/eval-criteria';


@Component({
  selector: 'app-evaluation-criteria-management',
  templateUrl: './evaluation-criteria-management.component.html',
  styleUrls: ['./evaluation-criteria-management.component.scss']
})
export class EvaluationCriteriaManagementComponent implements OnInit {

  page = 0;

  criteriaForm: FormGroup

  criteriaSource: any

  rawCriteriaSource: any

  edit(criteria) {
    this.criteriaForm.controls.criteria.setValue(criteria.id_criterio)
    this.criteriaForm.controls.weight.setValue(`${criteria.peso}%`)
    this.criteriaForm.controls.formula.setValue(criteria.tipoformula)
    this.page = 1;
  }

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private rawService: RawCriteriaService) {
    this.criteriaForm = this.fb.group ({
      criteria: ['', Validators.required],
      weight: ['', Validators.compose([Validators.required, Validators.pattern('^0\.[1-9][0-9]$|^0\.[1-9]$|^0\.0[1-9]$|^1\.00$|^[1-9]%$|^[1-9][0-9]%$|^100%$')])],
      formula: ['', Validators.required],
    })

    this.criteriaSource = this.route.data.pipe(
      map(res => res.criteria)
    )

    this.rawCriteriaSource = this.route.data.pipe(
      map(res => res.rawCriteria)
    )
  }

  getCriteriaNameById(element: EvalCriteria) {
    let id = element.id_criterio
    console.log(element)
    return this.rawService.findById(id)
      .pipe(
        map( (criteria: any) => {
          console.log(criteria)
          return criteria?.nombre
        })
      )
  }

  ngOnInit(): void {
  }

  onSubmit() {
    
  }

}
