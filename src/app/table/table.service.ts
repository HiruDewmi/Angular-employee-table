import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TableService {
  constructor(private http: HttpClient) {}
  url = 'http://dummy.restapiexample.com/api/v1/employees';
  getData() {
    return this.http.get(`${this.url}/employees`);
  }
}
