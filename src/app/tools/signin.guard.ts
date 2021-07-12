import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { authOptions, urls } from '../config';

@Injectable({
  providedIn: 'root'
})
export class SigninGuard implements CanActivate {
  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  /**
   * @description Check if the user is signed in, jump to the login page if not signed in
   */
  private get(): Observable<HttpResponse<any>> {
    return this.http.get(urls.angular.signin_guard, authOptions);
  }

  pass: boolean = false;

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.get().subscribe(
      () => {
        this.pass = true;
      },
      (error) => {
        if (error.status === 401) {
          this.router.navigate(['/account/signin'], {relativeTo: this.route}).then();
        }
      }
    );
    return this.pass;
  }
}
