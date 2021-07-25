import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FakeDataService {
  private API = 'https://24pullrequests.com/users.json';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<object[]> {
    return this.http.get<object[]>(this.API).pipe();
  }
}
