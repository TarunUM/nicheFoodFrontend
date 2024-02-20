import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { FormGroup } from "@angular/forms";

@Injectable({
  providedIn: 'root',
})
export class UserService {

  url : string = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) { }

  registration(formGroup: FormGroup) {
    console.log(formGroup.value);
    return true;
    // return this.http.post(`${this.url}/auth/register`, {
    //   name: name,
    //   email: email,
    //   password: password,
    //   phone: phone
    // });
  }
}
