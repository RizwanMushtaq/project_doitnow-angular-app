import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class HomeService {
  constructor(private httpClient: HttpClient) {}

  public getTodos(): Observable<any> {
    let params = new HttpParams().set('userId', '1');
    return this.httpClient.get(environment.URL.userTodos, {
      params,
    });
  }
}
