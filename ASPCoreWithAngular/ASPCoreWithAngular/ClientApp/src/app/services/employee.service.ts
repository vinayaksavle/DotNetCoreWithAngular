
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { map } from 'rxjs/operators';
import { Employee } from '../../models/employee';

@Injectable()
export class EmployeeService {
  myAppUrl: string = "";

  constructor(private _http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.myAppUrl = baseUrl + 'api/Employee/';
  }

  getEmployees() {
    return this._http.get(this.myAppUrl + 'Index').pipe(map(
      response => {
        return response;
      })).catch(this.errorHandler);
  }

  getEmployeeById(id: number) {
    return this._http.get(this.myAppUrl + 'Details/' + id).pipe(map(
      response => { return response; }));
  }

  saveEmployee(employee: Employee) {
    return this._http.post(this.myAppUrl + 'Create', employee).pipe(map(
      response => {
        return response;
      }
    ));
  }

  updateEmployee(employee: Employee) {
    return this._http.put(this.myAppUrl + 'Edit', employee)
      .pipe(map(
        response => {
          return response;
        }));
  }

  deleteEmployee(id: number) {
    return this._http.delete(this.myAppUrl + 'Delete/' + id)
      .pipe(map(
        response => {
          return response;
        }));
  }

  errorHandler(error: Response) {
    console.log(error);
    return Observable.throw(error);
  }

}
