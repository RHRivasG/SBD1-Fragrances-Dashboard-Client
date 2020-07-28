import { Component, OnInit } from "@angular/core";
import { OrderService } from "../order.service";
import { AuthService } from "src/app/auth/services/auth.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-order-list",
  templateUrl: "./order-list.component.html",
  styleUrls: ["./order-list.component.scss"],
})
export class OrderListComponent implements OnInit {
  constructor(private orderService: OrderService, private auth: AuthService) {}

  orders: any[] = [];
  idprod: number;
  displayedColumns: string[] = ["id", "empresa", "status", "precio", "pagar"];
  dataSource = this.orders;

  ngOnInit(): void {
    this.auth.getProducer().subscribe((res) => {
      console.log(res.id);
      this.idprod = res.id;
      this.getOrders(this.idprod.toString());
    });
  }

  getOrders(idprod: string) {
    this.orderService.getOrders(idprod).subscribe(
      (res) => {
        console.log(res);
        this.orders = res;
      },
      (err) => console.log(err)
    );
  }
}
