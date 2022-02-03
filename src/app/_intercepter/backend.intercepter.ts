import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class backendInterceptor implements HttpInterceptor {
  intercept(
      requset: HttpRequest<any>, next: HttpHandler
  ): Observable<HttpEvent<any>> {}
}
