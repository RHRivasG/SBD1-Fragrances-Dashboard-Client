import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EvalCriteria } from 'src/app/models/eval-criteria';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { RawCriteriaService } from '../services/raw-criteria.service';
import { FormGroup, Validators, FormBuilder, ValidationErrors, FormArray } from '@angular/forms';
import { EvalScale } from 'src/app/models/eval-scale';
import { ShipmentOption } from 'src/app/models/shipment-option';
import { PaymentCondition } from 'src/app/models/payment-condition';
import { EvaluationStorageService } from '../services/evaluation-storage.service';
import { ContractService } from '../services/contract.service';

function limitInput(fb: FormGroup) {
  let input = fb.controls.input
  let limit = fb.controls.scale.value

  console.log(input.errors)

  if (!(limit?.rangoi <= input.value && input.value <= limit?.rangf) && !!limit)
    input.setErrors({ 'badLimited': true })
  
  return null
}
@Component({
  selector: 'app-evaluate-provider-formula',
  templateUrl: './evaluate-provider-formula.component.html',
  styleUrls: ['./evaluate-provider-formula.component.scss']
})
export class EvaluateProviderFormulaComponent implements OnInit {

  pointsToEval: Observable<(PaymentCondition | ShipmentOption)[]>

  evalOptions: Observable<{criteria: EvalCriteria[], provider: number}>

  evalForm: FormGroup

  evalScales: Observable<EvalScale>

  calcEval() {
    let i = 0
    let crit: EvalCriteria
    this.evalForm.disable()
    let formArray = this.evalForm.controls.evalArray as FormArray
    let result = formArray.controls
      .map(f => f as FormGroup)
      .reduce((acc, fg) => {
        this.evalOptions
          .subscribe(
            o => crit = o.criteria[i++] 
          )
        let val = Number.parseInt(fg.controls.input.value);
        let scale = fg.controls.scale.value.rangf;
        return acc + (val / scale) * (crit.peso / 100) 
      } ,0 )
    
    if (result*100 >= this.evalForm.controls.passingScore.value)
    {
      window.alert(`Prueba realizada: Resultado positivo ${result*100} >= ${this.evalForm.controls.passingScore.value}`)

      if (this.store.evalType == 'I')
      {
        formArray.controls
          .map(fb => (fb as FormGroup).controls.condition.value)
          .forEach(val => {
            this.contractService.pushConditions(val)
          })
        this.contractService.settleConditions()
        this.router.navigate([ '../select-products' ], { relativeTo: this.route })
      }
      else
      {
        this.contractService.renewContract(this.store.providerId)
          .subscribe(
            res => window.alert(`Renovado contrato en fecha ${res.fecha}`)
          )
        this.router.navigate([ '../../evaluation' ], { relativeTo: this.route })
      }

      
    } else {
      window.alert('Prueba realizada: Resultado negativo')
    }
    this.evalForm.enable()
  }

  getCriteriaNameById(id: number): Observable<string> {
    return this.rawService.findById(id)
      .pipe(
        map(criteria => criteria.nombre)
      )
  }

  constructor(private route: ActivatedRoute, private rawService: RawCriteriaService, private fb: FormBuilder, private router: Router, private store: EvaluationStorageService, private contractService: ContractService) { }

  ngOnInit(): void {
    this.evalOptions = this.route.data
      .pipe(
        map((res) => res.evalOptions)
      )
    
    this.evalOptions
      .pipe(
        map(res => {
          return res.criteria?.reduce((group, _) => {
            group.push(this.fb.group({
              scale: [null, Validators.required],
              condition: [null, Validators.required],
              input: [null, Validators.required],
              peso: ['']
            }, {validators: limitInput}))
            return group
          }, this.fb.array([]))
        }
           )
      )
      .subscribe(
        array => {
          this.evalForm = this.fb.group({
            passingScore: ['', Validators.compose([Validators.min(0), Validators.max(100), Validators.required])],
            evalArray: array
          })
        }
      )
    this.evalScales = this.route.data
      .pipe(
        map(d => d.evalScales)
      )

    this.pointsToEval = this.route.data
      .pipe(
        map(res => res.providerCondition.concat(res.providerShipment))
      )
    
  }

  messageOf(point: PaymentCondition | ShipmentOption | string) {
    if (typeof point == "string")
      return 'Criterio de eficiencia'
    else if ('tipo' in point)
      return `Condicion de pago ${point.tipo == 'AP' ? 'aplazado' : 'al contado'} ${point.cuotas == null ? 'sin cuotas' : 'con ' + point.cuotas + ' cuotas' }`
    else if ('costo' in point)
      return `Condicion de envio por ${point.tipo_transporte == 'A' ? 'avion' : 'barco'}`
  }

  pointsOf(c: EvalCriteria) {
    return this.pointsToEval
      .pipe(
        map(res =>{
          if (this.store.evalType == 'E') return [ 'Criterio de efficiencia' ]
          return res
            .filter(point => {
              switch (c.id_criterio) {
                case 1 : return ('tipo' in point);
                case 2: return ('costo' in point);
              }
            })
        }
      )
    )
  }
  
}



