import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-evaluation-select-products",
  templateUrl: "./evaluation-select-products.component.html",
  styleUrls: ["./evaluation-select-products.component.scss"],
})
export class EvaluationSelectProductsComponent implements OnInit {
  //Datos de prueba
  products: string[];

  constructor() {}

  ngOnInit(): void {
    this.products = ["Sagete", "Tropicate", "Yara Yara"];
  }

  onSave(status) {
    const value = status.selectedOptions.selected.map((sel) => sel.value);
    console.log(value);
  }
}
