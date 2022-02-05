import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators'

@Injectable()
export class backendInterceptor implements HttpInterceptor {

  /**
   * 
   * @params requset
   * @params next
   * @return Observable
   */
  intercept(
      requset: HttpRequest<any>, next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const { url, method, headers, body } = requset;

    return of(null)
    .pipe(mergeMap(handleRoute))
    .pipe()
  }
}
