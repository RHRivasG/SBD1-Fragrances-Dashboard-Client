import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Provider } from 'src/app/models/provider-model';
import { Producer } from 'src/app/models/producer-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthOptionsResolver implements Resolve<(Producer | Provider)[]> {
    constructor(private http: HttpClient) {
        
    }

    resolve(_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): (Producer | Provider)[] | import("rxjs").Observable<(Producer | Provider)[]> | Promise<(Producer | Provider)[]> {
        //return this.http.get<(Producer | Provider)[]>('this is a test url')
        return [
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
        ]
    }
    
}

