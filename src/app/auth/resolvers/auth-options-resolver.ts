import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Provider } from 'src/app/models/provider-model';
import { Producer } from 'src/app/models/producer-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { map, flatMap } from 'rxjs/operators';
import { Enterprise, fromProvider, fromProducer } from 'src/app/models/enterprise';

@Injectable()
export class AuthOptionsResolver implements Resolve<Enterprise[]> {
    constructor(private http: HttpClient) {
        
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Enterprise[] | Observable<Enterprise[]> | Promise<Enterprise[]> {
        return this.getProviders().pipe(
            flatMap(arrV =>
                this.getProductors()
                    .pipe(
                        map(arrR => arrR
                            .map(fromProducer)
                            .concat(
                                arrV
                                    .map(fromProvider)
                            )
                        )
                    )
                )
        )
    }

    public getProductors(): Observable<Producer[]> {
        return this.http.get<Producer[]>('api/producers')
    }

    public getProviders(): Observable<Provider[]> {
        return this.http.get<Provider[]>('/api/providers')
    }
    
}

