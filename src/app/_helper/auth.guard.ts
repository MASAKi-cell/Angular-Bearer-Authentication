import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, } from '@angular/router';
import { AuthenticationService } from 'src/app/_service/authentication.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router, 
    private authenticationService: AuthenticationService
    ) {}

  /**
   * ログイン済みユーザーであるかどうかチェックする。未ログインの場合はログイン画面に遷移する。
   * @param route
   * @param state
   * @returns boolean
   */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const currentUser = this.authenticationService.currentUserValue;
    if (currentUser) {
      return true;
    }

    this.router.navigate(['']), { queryParams: { returnUrl: state.url } };
    return false;
  }
}
