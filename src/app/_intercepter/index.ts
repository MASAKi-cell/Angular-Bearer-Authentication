import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from 'src/app/_intercepter/error.interceptor';
import { JWTInterceptor } from 'src/app/_intercepter/jwt.intetceptor';
import { backendInterceptor } from 'src/app/_intercepter/backend.intercepter';

export const HttpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: JWTInterceptor, multi: true},
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  { provaide: HTTP_INTERCEPTORS, useClass: backendInterceptor, multi: true }
];
