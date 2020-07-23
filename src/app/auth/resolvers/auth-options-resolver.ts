import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Provider } from 'src/app/models/provider-model';
import { Producer } from 'src/app/models/producer-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { map, flatMap } from 'rxjs/operators';
import { Enterprise, fromProvider, fromProducer } from 'src/app/models/enterprise';
import { ProvidersService } from 'src/app/services/providers.service';
import { ProducerService } from 'src/app/services/producer.service';

@Injectable()
export class AuthOptionsResolver implements Resolve<Enterprise[]> {
    
    constructor(private providers: ProvidersService, private producers: ProducerService) {
        
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Enterprise[] | Observable<Enterprise[]> | Promise<Enterprise[]> {
        return this.providers.get()
            .pipe(
                flatMap(
                    res =>
                        this.producers.get().pipe(
                            map(res2 => res.map(fromProvider).concat(res2.map(fromProducer)))
                        )
                )
            )
    }
}


