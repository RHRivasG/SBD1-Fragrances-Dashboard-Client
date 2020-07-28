import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { map, catchError } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild  {

  constructor(private auth: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    console.log("called on " + state.url)

    let wanted = state.url.split('/')[2]

    this.auth.redirectUrl = state.url
    
    if (wanted == "productor")
    {
      return this.auth.getProducer()
        .pipe(
          map(res => !!res ? true: false),
          catchError(_ => {
            return of(this.router.parseUrl('/auth'))
          })
        )
    }
    else if (wanted == "provider")
    {
      return this.auth.getProvider().pipe(
        map(res => !!res ? true: false),
        catchError( _ => of(this.router.parseUrl('/auth')))
      )
    }
        
        

    return null
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.canActivate(next, state);
  }
}
