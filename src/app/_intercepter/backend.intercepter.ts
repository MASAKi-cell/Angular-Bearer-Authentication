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

    // リクエストの内容を格納
    const { url, method, headers, body } = requset;

    // 通知処理
    return of(null)
    .pipe(mergeMap(handleRoute))
    .pipe(materialize)
    .pipe(delay(500))
    .pipe(dematerialize());

    // URLの末尾によって条件を分岐
    function handleRoute(){
      switch(true){
        case (url.endsWith('/users/authenticate') && method === 'POST'):
          return authenticate();
        case (url.endsWith('/users') && method === 'GET'):
          return getUsers();
        default:
          next.handle(requset);
      }

    }

    function authenticate(){

    }

    function getUsers(){

    }
  }
}
