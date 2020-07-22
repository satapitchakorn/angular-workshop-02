import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AnonymousGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const currentUser = this.authenticationService.currentUserValue;
    if (currentUser) {
      const token = this.authenticationService.getToken;
      const helper = new JwtHelperService();
      // logged in so return true
      const exp = new Date(helper.getTokenExpirationDate(token));

      const now = new Date();
      if (exp > now) {
        return false;
      }
      else {
        return true;
      }
    }

    // not logged in so redirect to login page with the return url
    return true;
  }

}
