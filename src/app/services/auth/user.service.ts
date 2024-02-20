import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { FormControl, FormGroup } from "@angular/forms";
import { RegisterForm } from "../../interfaces/RegisterForm";

@Injectable({
  providedIn: 'root',
})
export class UserService {

  url : string = 'http://localhost:8080/api/v1/auth';

  constructor(private http: HttpClient) { }

  registration(formGroup: FormGroup<RegisterForm>) {

    return this.http.post(`${this.url}/register`, {
      name: formGroup.value.name,
      email: formGroup.value.email,
      password: formGroup.value.password,
      phone: formGroup.value.phone,
    }, {
      observe: 'response'
    });
  }

  login(credentials:{email: string, password: string}) {
    return this.http.post(`${this.url}/login`, {
      email: credentials.email,
      password: credentials.password
    },{
      observe: 'response',
    })
  }
}
