import { Injectable } from '@angular/core';
import { HttpRequest,HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from '../_service/authentication.service';

@Injectable()
export class JWTInterceptor implements HttpInterceptor {

    constructor(
        private authenticationservice: AuthenticationService,
    ){};

    intercept(requset: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const currentUser = this.authenticationservice.currentUserValue;
        const isLggedIn = currentUser && currentUser.token;
        const isApiUrl = requset.url.startsWith(enviroment.apiUrl)
        throw new Error('Method not implemented.');
    }

}