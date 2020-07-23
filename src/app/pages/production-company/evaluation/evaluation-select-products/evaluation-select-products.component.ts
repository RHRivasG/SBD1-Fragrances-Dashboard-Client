import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { IngredientService } from 'src/app/services/ingredient.service';
import { EvaluationStorageService } from '../services/evaluation-storage.service';

@Component({
  selector: "app-evaluation-select-products",
  templateUrl: "./evaluation-select-products.component.html",
  styleUrls: ["./evaluation-select-products.component.scss"],
})
export class EvaluationSelectProductsComponent implements OnInit {
  //Datos de prueba
  products: any;

  constructor(private route: ActivatedRoute, private push: IngredientService, private store: EvaluationStorageService) {}

  ngOnInit(): void {
    this.products = this.route.data.pipe(
      map(res => res.ingredients)
    )
  }

  onSave(status) {
    this.push.pushContract(
      {
        id_emp_prod: 1,
        id_emp_prov: this.store.providerId,
        exclusividad: false,
        fecha_emision: new Date('2020-07-23'),
        fecha_cancelado: null,
        motivo_cancelado: null
      }
    )
  }
}
