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
        return of([
            {
                id: 1,
                name: 'IFF',
                pag_web: null,
                inf_contacto: null
            },
            {
                id: 2,
                name: 'Firmenich',
                pag_web: null,
                inf_contacto: null
            },
            {
                id: 3,
                name: 'Armonex',
                pag_web: null,
                inf_contacto: null
            },
            {
                id: 4,
                name: 'fourchem',
                pag_web: null,
                inf_contacto: null
            },
            {
                id: 5,
                name: 'Sephora',
                pag_web: null,
                inf_contacto: null
            },            
        ])
    }

    public getProviders(): Observable<Provider[]> {
        return of(
            [
                
                {
                    id: 1,
                    name: 'Keva',
                    pag_web: null,
                    inf_contacto: null
                },
                {
                    id: 2,
                    name: 'essence',
                    pag_web: null,
                    inf_contacto: null
                },
                {
                    id: 3,
                    name: 'Privi',
                    pag_web: null,
                    inf_contacto: null
                },
                {
                    id: 4,
                    name: 'PA',
                    pag_web: null,
                    inf_contacto: null
                },            
            ]   
        )
    }
    
}

