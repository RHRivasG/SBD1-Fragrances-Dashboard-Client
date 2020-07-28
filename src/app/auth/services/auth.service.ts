import { Injectable, HostListener } from '@angular/core';
import { Enterprise, fromProducer, fromProvider } from 'src/app/models/enterprise';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Producer } from 'src/app/models/producer-model';
import { Provider } from 'src/app/models/provider-model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  redirectUrl = '/dashboard/productor/evaluation'

  constructor(private http: HttpClient) { }

  storeProvider() {
    
  }

  @HostListener('beforeUnload')
  clearCookies() {
    
  }
  
  setProvider(provider: Enterprise)  {
    if (provider.tipo == 'V')
      return this.http.post('/api/login?login_type=provider', provider.id, {responseType: 'text/plain' as 'json'})

  }

  setProducer(producer: Enterprise) {
    if (producer.tipo == 'R')
      return this.http.post('/api/login?login_type=producer', producer.id, {responseType: 'text/plain' as 'json'})  
  }

  
  getProducer() {
    return this.http.get<Producer>('/api/login/logged?auth_type=producer')
      .pipe(map(fromProducer))
  }


  getProvider() {
    return this.http.get<Provider>('/api/login/logged?auth_type=provider')
      .pipe(map(fromProvider))
  }

}
