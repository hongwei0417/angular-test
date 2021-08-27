import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpHelperService {
  constructor(private httpClient: HttpClient) {}

  get<T>(baseAPI: string, name: string, options = {}): Observable<T> {
    return this.httpClient.get<T>(`${baseAPI}/${name}`, options);
  }

  post<T, R>(
    baseAPI: string,
    name: string,
    data: T,
    options = {}
  ): Observable<R> {
    return this.httpClient.post<R>(`${baseAPI}/${name}`, data, options);
  }

  put<T, R>(
    baseAPI: string,
    name: string,
    data: T,
    options = {}
  ): Observable<R> {
    return this.httpClient.post<R>(`${baseAPI}/${name}`, data, options);
  }

  delete<T>(baseAPI: string, name: string, options = {}): Observable<T> {
    return this.httpClient.delete<T>(`${baseAPI}/${name}`, options);
  }
}
