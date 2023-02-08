import { UserLoginRequest } from './../models/api-models/UserLoginRequest';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserRegisterRequest } from '../models/api-models/UserRegisterRequest';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseApiUrl = 'https://localhost:44392/';

  constructor(private httpClient: HttpClient) {}

  public register(user: UserRegisterRequest): Observable<any> {
    return this.httpClient.post(
      this.baseApiUrl + 'api/User/register',
      user,
      {responseType:'text'}
    );
  }
  public login(user: UserLoginRequest): Observable<string> {
    return this.httpClient.post(this.baseApiUrl + 'api/User/login', user, {
      responseType: 'text',
    });
  }
}
