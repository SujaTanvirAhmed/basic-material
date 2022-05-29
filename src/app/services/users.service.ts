import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsersService {

    private baseUrl: string = 'http://localhost:4000';

    constructor(private http: HttpClient) { }

    getAllUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.baseUrl + '/users');
    }

    getOneUser(userId: number): Observable<User> {
        return this.http.get<User>(this.baseUrl + '/users/' + userId);
    }

    addOneUser(user: User) {
        return this.http.post<any>(this.baseUrl + '/users', user);
    }

    updateOneUser(user: User) {
        return this.http.put<any>(this.baseUrl + '/users', user);
    }

}