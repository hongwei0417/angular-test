import { Transaction } from './../../transaction/models/Transaction';
import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

const fakeData: Transaction[] = [
  {
    id: '1',
    title: 'Kevin',
    content: 'test case 1',
    executeCount: 10,
    createTime: new Date(2021, 7, 24),
  },
  {
    id: '2',
    title: 'Jack',
    content: 'do something tonight...',
    executeCount: 4,
    createTime: new Date(2021, 7, 25),
  },
  {
    id: '3',
    title: 'Eric',
    content: 'send email to everybody',
    executeCount: 1,
    createTime: new Date(2021, 7, 26),
  },
];

@Injectable({
  providedIn: 'root',
})
export class FakeDataService {
  // private API = 'https://24pullrequests.com/users.json';
  // private API = 'http://api.plos.org/search?q=title:google';

  constructor(private http: HttpClient) {}

  // getArticles(): Observable<object[]> {
  //   return this.http.get<object[]>(this.API).pipe();
  // }

  getData(): Observable<Transaction[]> {
    return of(fakeData);
  }
}
