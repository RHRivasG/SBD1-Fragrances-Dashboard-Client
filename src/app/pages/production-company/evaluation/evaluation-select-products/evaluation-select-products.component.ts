import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { IngredientService } from "src/app/services/ingredient.service";
import { EvaluationStorageService } from '../services/evaluation-storage.service';
import { ContractService } from '../services/contract.service';
import { MatSelectionList } from '@angular/material/list';

@Component({
  selector: "app-evaluation-select-products",
  templateUrl: "./evaluation-select-products.component.html",
  styleUrls: ["./evaluation-select-products.component.scss"],
})
export class EvaluationSelectProductsComponent implements OnInit {
  //Datos de prueba
  products: any;
  @ViewChild('ifralist')
  ifralist: MatSelectionList
  
  constructor(private route: ActivatedRoute, private push: IngredientService, private store: EvaluationStorageService, private router: Router, private contractService: ContractService) {}

  ngOnInit(): void {
    this.products = this.route.data.pipe(
      map(res => res.ingredients)
    )
  }

  onSave(ifra, others) {
    console.log(ifra)
    console.log(others)
    this.contractService
      .withIngredients(
        ifra.selectedOptions.selected.map(res => res.value),
        others.selectedOptions.selected.map(res => res.value)
      )
    this.contractService.postContract(false).subscribe(
      _ => {
        window.alert('Contrato creado correctamente')
        this.router.navigate(['../../evaluation'], {relativeTo: this.route})
      },
      e => window.alert(`Creacion del contrato fallido, ${e.message}`)
    )
  }
}
