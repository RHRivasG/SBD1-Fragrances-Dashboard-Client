import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class OrderService {
  constructor(private httpClient: HttpClient) {}

  BASE_URL: string = "http://localhost:1323";
  provider: string;

  getProvider(): string {
    return this.provider;
  }

  setProvider(id: string): void {
    this.provider = id;
    localStorage.setItem("idprov", JSON.stringify(this.provider));
  }

  getOrders(idprod: string): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.BASE_URL}/api/pedidos/${idprod}`);
  }
  createOrder(idprod: string, idprov: string, order: any): Observable<any> {
    console.log(order);
    let json = JSON.stringify(order);
    let param = "json=" + json;
    let headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.httpClient.post<any>(
      `${this.BASE_URL}/api/pedido/${idprod}/${idprov}`,
      json,
      {
        headers: headers,
      }
    );
  }

  getPagosParticulares(idprod: string, idprov: string): Observable<any> {
    return this.httpClient.get<any[]>(
      `${this.BASE_URL}/api/pagos-particulares/${idprod}/${idprov}`
    );
  }

  getEnviosParticulares(idprod: string, idprov: string): Observable<any> {
    return this.httpClient.get<any[]>(
      `${this.BASE_URL}/api/envios-particulares/${idprod}/${idprov}`
    );
  }

  getPresentations(idprod: string, idprov: string): Observable<any> {
    return this.httpClient.get<any[]>(
      `${this.BASE_URL}/api/presentaciones/${idprod}/${idprov}`
    );
  }

  getProviders(idprod: string): Observable<any> {
    return this.httpClient.get<any[]>(
      `${this.BASE_URL}/api/proveedores/${idprod}`
    );
  }
}
