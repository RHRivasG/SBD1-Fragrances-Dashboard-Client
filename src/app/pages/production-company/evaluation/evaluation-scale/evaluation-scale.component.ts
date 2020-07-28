import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators'
import { MatDialog } from '@angular/material/dialog';
import { RusuerDialogComponent } from '../../rusuer-dialog/rusuer-dialog.component';
import { ScaleService } from '../services/scale.service';

@Component({
  selector: 'app-evaluation-scale',
  templateUrl: './evaluation-scale.component.html',
  styleUrls: ['./evaluation-scale.component.scss']
})
export class EvaluationScaleComponent implements OnInit{

  page = 0;

  evalForm: FormGroup

  scaleSource: any

  method: string = "CREATE"

  toUpdate: any

  intervalId: any

  setMethod() {
    if (this.page == 0)
      this.method == "CREATE"
  }

  updateSource() {
    this.intervalId = setInterval(() => {
      this.router.navigate(['/dashboard/productor/evaluation/scales'])
      clearInterval(this.intervalId)
    }
      ,  1500)
  }


  newScale() {
    console.log(this.evalForm.controls.active)

    if (this.method == "CREATE")
    {
      let date = Date.now()

      let scale = {
        rangoi: this.evalForm.controls.rangoi.value,
        rangf: this.evalForm.controls.rangf.value,
        fechai: date,
        fechaf: null
      }
      this.scaleService.postScale(scale)
        .subscribe(res => window.alert(`Escala de evaluacion creada con exito ${res}`),
                   error => window.alert(`Error ocurrido en la creacion de la escala ${error.message}`))
    }
    else
    {
      let scale = {
        id_emp_prod: this.toUpdate.id_emp_prod,
        rangoi: this.evalForm.controls.rangoi.value,
        rangf: this.evalForm.controls.rangf.value,
        fechai: this.toUpdate.fechai,
        fechaf: this.toUpdate.fechaf 
      }

      this.scaleService.updateScale(scale)
        .subscribe(res => window.alert(`Escala de evaluacion creada con exito ${res}`),
                   error => window.alert(`Error ocurrido en la creacion de la escala ${error.message}`))
    }
    this.method = "CREATE"
    this.updateSource()
  }

  edit(e: any)
  {
    console.log(this.evalForm.controls)
    this.method = "UPDATE"
    this.toUpdate = e
    this.evalForm.controls.rangf.setValue(e.rangf)
    this.evalForm.controls.rangoi.setValue(e.rangoi)
    this.page = 1
  }

  confirmCancel(e) {
    let callback =  () => {
      this.scaleService.cancelScale(e)
        .subscribe(
          res => window.alert(`Escala de evaluacion no disponible: ${res}`),
          error => window.alert(`Escala de evaluacion no ha podido ser cancelada: ${error.message}`)
        )
      this.updateSource()
    }
    const dialog = this.dialog.open(RusuerDialogComponent, {
      width: '300px',
      data : {message: '¿Esta seguro que quiere cancelar esta escala?',
              callback(): void {
                callback()
              },
              cancelCallback(): void{
                console.log("finished cancel callback")
              } }
    })

    dialog.afterClosed()
      .subscribe(_ => console.log('Exited dialog'))
  }

  constructor(private fb: FormBuilder, private route: ActivatedRoute, public dialog: MatDialog, private scaleService: ScaleService, private router: Router) {
    this.evalForm = this.fb.group({
      rangf: ['', Validators.required],
      rangoi: ['', Validators.required],
    })

    this.scaleSource = this.route.data.pipe(
      map(res => res.scales)
    )
  }

  ngOnInit(): void {
  }

}
