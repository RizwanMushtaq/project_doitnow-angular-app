import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInterface } from '../types/user.Interface';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const userInfoString: string | null = localStorage.getItem('userInfo');
    let userInfo: UserInterface;

    if (userInfoString) {
      userInfo = JSON.parse(userInfoString);
      let token = userInfo.access_token;
      const modifiedRequest = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
      return next.handle(modifiedRequest);
    }

    return next.handle(request);
  }
}
