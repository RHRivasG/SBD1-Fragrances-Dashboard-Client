import { Component, OnInit } from "@angular/core";
import { OrderService } from "../order.service";
import { AuthService } from "src/app/auth/services/auth.service";

@Component({
  selector: "app-order-form",
  templateUrl: "./order-form.component.html",
  styleUrls: ["./order-form.component.scss"],
})
export class OrderFormComponent implements OnInit {
  constructor(private orderService: OrderService, private auth: AuthService) {}

  idprod: number;
  idprov: string;
  presentaciones: any[] = [];
  condpago: any[] = [];
  condenvio: any[] = [];

  ngOnInit(): void {
    this.auth.getProducer().subscribe((res) => {
      console.log(res.id);
      this.idprod = res.id;
      this.idprov = JSON.parse(localStorage.getItem("idprov"));
      console.log(this.idprov);
      this.getPagosParticulares(this.idprod.toString(), this.idprov);
      this.getEnviosParticulares(this.idprod.toString(), this.idprov);
      this.getPresentations(this.idprod.toString(), this.idprov);
    });
  }

  getPagosParticulares(idprod: string, idprov: string) {
    this.orderService.getPagosParticulares(idprod, idprov).subscribe(
      (res) => {
        console.log(res);
        this.condpago = res;
      },
      (err) => console.log(err)
    );
  }

  getEnviosParticulares(idprod: string, idprov: string) {
    this.orderService.getEnviosParticulares(idprod, idprov).subscribe(
      (res) => {
        console.log(res);
        this.condenvio = res;
      },
      (err) => console.log(err)
    );
  }

  getPresentations(idprod: string, idprov: string) {
    this.orderService.getPresentations(idprod, idprov).subscribe(
      (res) => {
        console.log(res);
        this.presentaciones = res;
      },
      (err) => console.log(err)
    );
  }

  createOrder(pago, envio, presentaciones) {
    console.log(pago.value);
    console.log(envio.selectedOptions.selected[0]?.value);
    console.log(presentaciones.selectedOptions.selected[0]?.value);
  }
}
