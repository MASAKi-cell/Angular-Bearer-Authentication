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
        const isLoggedIn = currentUser && currentUser.token;
        const isApiUrl = requset.url.startsWith(environment.apiUrl)
        if(isLoggedIn && isApiUrl) {
            requset = requset.clone({
                setHeaders: {
                    // to add headers to the requset in the interceptor
                    Authorization: `Bearer $ { currentUser.token }`
                }
            });
        }
        return next.handle(requset);
    }

}