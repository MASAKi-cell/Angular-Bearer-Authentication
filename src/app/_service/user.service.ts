import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../_models/user'

@Injectable({ providedIn: 'root' })

export class Userservice {
    constructor(private http: HttpClient){}

    getAll(): any{
       return this.http.get<User[]>(`${environment.apiUrl}/users`)
    }
}