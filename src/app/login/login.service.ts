import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class LoginService {
  constructor(private authService: AuthService) {}

  login(username: string, password: string): Observable<any> {
    return this.authService.login(username, password);
  }
}
