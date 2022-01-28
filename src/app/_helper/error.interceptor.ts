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

    intercept(request: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {
        
    }
}