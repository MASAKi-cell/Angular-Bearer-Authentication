import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/_service/authentication.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor{
    constructor(
        private service: AuthenticationService
    ){}

    /**
     * APIからのHTTPレスポンスの値をチェックする。「401 Unauthorized」以外の場合もエラー表示させる。
     * @param request 
     * @param next 
     * @return
     */

    intercept(request: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {
        
    }
}