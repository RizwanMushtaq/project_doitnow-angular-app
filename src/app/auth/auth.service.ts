import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, tap } from 'rxjs';

interface LoginRequestResponse {
  userId: number;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  access_token: string;
}

@Injectable()
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  public login(
    username: string,
    password: string
  ): Observable<LoginRequestResponse> {
    return this.httpClient
      .post<LoginRequestResponse>(environment.URL.login, {
        username: username,
        password: password,
      })
      .pipe(
        tap((data) => {
          localStorage.setItem('userInfo', JSON.stringify(data));
        })
      );
  }
}
