import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/_service/authentication.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private authenticationservice: AuthenticationService) {}

  /**
   * HTTPレスポンスにエラーが含まれているかチェックする。
   * もし「401 Unauthorized」の場合は、自動的にログアウトする。それ以外のエラーはコンソールログにエラー表示させる。
   * @param request
   * @param next
   * @return observable of the event stream
   * @throws throwError
   */
  intercept(
      request: HttpRequest<any>, next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error) => {
        if (error.status === 401) {
          this.authenticationservice.logout();
          location.reload(); // 現在のURLを再読み込みする。
        }
        const err = error.error.message | error.statusText;
        return throwError(err);
      })
    );
  }
}
