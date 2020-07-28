import { Injectable, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IfraIngredient } from 'src/app/models/ifra-ingredient';
//import { MatSelectionList } from '@angular/material/list';

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  payment: any[] = []
  shipment: any[] = []

  constructor(private http: HttpClient) { }

  renewContractWith(providerId: number) {
    return this.http.post('api/contract/renew', providerId, { responseType: 'text/plain' as 'json' })
  }

  newContractWith(providerId: number) {
    let new_contract = {
      id_emp_prov: providerId,
      exclusividad: false,
      fecha_emision: new Date().toISOString().split('T')[0],
      fecha_cancelado: null,
      motivo_cancelo: null
    }
    localStorage.setItem('contract-cache', JSON.stringify(new_contract))
  }

  pushConditions(condition)
  {
    if ('tipo' in condition)
      this.payment.push({
        id: null,
        shipment: null,
        payment: condition,
        descripcion: null
      })
    else if ('costo' in condition)
      this.shipment.push({
        id: null,
        shipment: condition,
        payment: null,
        descripcion: null
      })
  }
  
  settleConditions() {
    if (localStorage.getItem('contract-cache') != null)
      localStorage.setItem('contract-options',JSON.stringify(this.shipment.concat(this.payment)))
  }

  withIngredients(ifra?: IfraIngredient[], others?: any[]) {
    if (localStorage.getItem('contract-cache') != null)
    {
      let contract = JSON.parse(localStorage.getItem('contract-cache'))
      localStorage.setItem('contract-stock',
                           JSON.stringify({
                             id: null,
                             id_emp_prov: contract.id_emp_prov,
                             ifra: ifra,
                             others: others
                           })
                          )
    }
  }

  renewContract(idProvider: number) {
    return this.http.post<any>('/api/contract/renew', idProvider)
  }

  postContract(exclusividad) {
    let contract = localStorage.getItem('contract-cache'), option =  localStorage.getItem('contract-options') , stock = localStorage.getItem('contract-stock')
    if (contract != null && option != null && stock != null)
    {
      let contractObj = JSON.parse(contract)
      contractObj.exclusividad = exclusividad ? exclusividad : false
      return this.http.post('/api/contract/new', {
        contract: contractObj,
        options: JSON.parse(option),
        ingredientsb: JSON.parse(stock)
      })
    }
  }
}
