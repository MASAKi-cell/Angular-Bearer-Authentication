import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/_models/user';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject?: BehaviorSubject<User>;
    private currentUser?: Observable<User>;

    constructor(
        private http: HttpClient,
    ){
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser') as any));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User | undefined{
        return this.currentUserSubject?.value;
    }

    login(username: string ,password:string): Observable<any>{
        return this.http.post<any>(`${environment.apiUrl}/users/authenticate`, {username,password})
        .pipe(map(user => {
            localStorage.setItem('currentUser', JSON.stringify(user));
            this.currentUserSubject?.next(user);
            return user;
        }));
    }

    logout(){
        localStorage.removeItem('currentUser');
        this.currentUserSubject?.next(null as any);
    }

}