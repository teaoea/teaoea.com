import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate, CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { AuthService } from './auth.service';
import { Observable, of } from 'rxjs';
import { catchError, mapTo } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(
    private auth: AuthService,
    private router: Router
  ) {
  }

  checkAuth(): Observable<UrlTree | boolean> {
    return this.auth.get().pipe(
      mapTo(true),
      catchError(() => of(this.router.parseUrl('/account/signin')))
    );
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UrlTree | boolean> {
    return this.checkAuth();
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UrlTree | boolean> {
    return this.canActivate(childRoute, state);
  }
}
