import { Component, OnInit } from "@angular/core";
import { OrderService } from "../order.service";
import { AuthService } from "src/app/auth/services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-order-provider",
  templateUrl: "./order-provider.component.html",
  styleUrls: ["./order-provider.component.scss"],
})
export class OrderProviderComponent implements OnInit {
  constructor(
    private orderService: OrderService,
    private auth: AuthService,
    private router: Router
  ) {}

  idprod: number;
  providers: any;
  current_selected: any;

  ngOnInit(): void {
    this.auth.getProducer().subscribe((res) => {
      console.log(res.id);
      this.idprod = res.id;
      this.getProviders(this.idprod.toString());
    });
  }

  getProviders(idprod: string) {
    this.orderService.getProviders(idprod).subscribe(
      (res) => {
        console.log(res);
        this.providers = res;
      },
      (err) => console.log(err)
    );
  }

  onSelection(provs) {
    this.current_selected = provs.selectedOptions.selected[0]?.value;
    this.orderService.setProvider(this.current_selected.toString());
    this.router.navigateByUrl("/dashboard/productor/orders/form");
  }
}
