import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators'
import { RawCriteriaService } from '../services/raw-criteria.service';
import { EvalCriteria } from 'src/app/models/eval-criteria';
import { RusuerDialogComponent } from '../../rusuer-dialog/rusuer-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { CriteriaService } from '../services/criteria.service';


@Component({
  selector: 'app-evaluation-criteria-management',
  templateUrl: './evaluation-criteria-management.component.html',
  styleUrls: ['./evaluation-criteria-management.component.scss']
})
export class EvaluationCriteriaManagementComponent implements OnInit {

  method: string = "CREATE"

  page = 0;

  intervalId: any

  criteriaForm: FormGroup

  criteriaSource: any

  rawCriteriaSource: any

  toUpdate: any

  updateSource() {
    this.intervalId = setInterval(() => {
      this.router.navigate(['/dashboard/productor/evaluation/criteria'])
      clearInterval(this.intervalId)
    }
      ,  1500)
  }

  edit(criteria) {
    this.method = "UPDATE"
    this.criteriaForm.controls.criteria.setValue(criteria.id_criterio)
    this.criteriaForm.controls.weight.setValue(`${criteria.peso}%`)
    this.criteriaForm.controls.formula.setValue(criteria.tipoformula)
    this.page = 1;
    this.toUpdate = criteria
  }
  cancelCriteria(criteria) {
    const callback = () => {
      this.criteriaService.cancelCriteria(criteria).subscribe(
        res => window.alert(`Criterio cancelado exitosamente: ${res}`),
        error => window.alert(`Ocurrio un error: ${error.message}`)
      )
      this.updateSource()
    }
    const dialog = this.dialog.open(RusuerDialogComponent, {
      width: '300px',
      data: {
        message: '¿Esta seguro que quiere cancelar este criterio?',
        callback(): void {
          callback()
        },
        cancelCallback(): void{
          console.log("finished cancel callback")
        }
      }
    })
  }

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private rawService: RawCriteriaService, private dialog: MatDialog, private criteriaService: CriteriaService, private router: Router) {
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
    let peso = Number.parseFloat(this.criteriaForm.controls.weight.value.replace('%', ''))
    if (peso <= 1) peso = peso*100

    peso = Math.round(peso)

    if (this.method == "CREATE") {
      let criteria = {
        id_criterio: this.criteriaForm.controls.criteria.value,
        tipoformula: this.criteriaForm.controls.formula.value,
        peso: peso,
        fechai: Date.now(),
        fechaf: null
      }
      this.criteriaService.postCriteria(criteria)
        .subscribe(
          res => window.alert(`Criterio creado exitosamente ${res}`),
          error => window.alert(`Error durante la creacion del criterio: ${error.message}`)
        )
    } else {
      let criteria = {
        id_criterio: this.toUpdate.id_criterio,
        id_emp_prod: this.toUpdate.id_emp_prod,
        tipoformula: this.criteriaForm.controls.formula.value,
        peso: peso,
        fechai: this.toUpdate.fechai,
        fechaf: this.toUpdate.fechaf
      }
      this.criteriaService.updateCriteria(criteria)
        .subscribe(
          res => window.alert(`Criterio actualizado exitosamente ${res}`),
          error => window.alert(`Error durante la creacion del criterio: ${error.message}`)
        )
    }
    this.updateSource()
    this.method = "CREATE"
  }

  refreshForm() {
    this.page == 0 ? this.method = 'CREATE' : null
    if (this.method == 'CREATE')
    {
      this.toUpdate = null
      this.criteriaForm.controls.formula.reset()
      this.criteriaForm.controls.criteria.reset()
      this.criteriaForm.controls.weight.reset()
    }
  }

}
