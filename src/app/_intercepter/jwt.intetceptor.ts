import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from '../_service/authentication.service';

@Injectable()
export class JWTInterceptor implements HttpInterceptor {
  constructor(private authenticationservice: AuthenticationService) {}

  /**
   * Bearer認証の処理
   * @param requset 
   * @param next 
   * @returns requset
   */
  intercept(requset: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const currentUser = this.authenticationservice.currentUserValue;
    const isLoggedIn = currentUser && currentUser.token;
    const isApiUrl = requset.url.startsWith(environment.apiUrl);

    if (isLoggedIn && isApiUrl) {
      requset = requset.clone({
        setHeaders: {
          Authorization: `Bearer $ { currentUser.token }`,
        },
      });
    }
    return next.handle(requset);
  }
}
