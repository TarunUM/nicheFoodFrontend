import { Component, OnInit } from "@angular/core";
import { CommonModule } from '@angular/common';
import {InputComponent} from "../../shared/input/input.component";
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from "@angular/forms";
import { NgxMaskDirective } from "ngx-mask";
import { ButtonsComponent } from "../../shared/buttons/buttons.component";
import { UserService } from "../../../services/auth/user.service";
import { RegisterForm } from "../../../interfaces/RegisterForm";
import { data } from "autoprefixer";
import { HttpResponse } from "@angular/common/http";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    InputComponent,
    ReactiveFormsModule,
    NgxMaskDirective,
    ButtonsComponent,
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [],
})
export class RegisterComponent implements OnInit {
  name = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.pattern('[a-zA-Z ]*'),
  ]);

  email = new FormControl('', [
    Validators.required,
    Validators.email,
    Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
  ]);

  password = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
    Validators.maxLength(16),
    Validators.pattern(
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}$'
    ),
  ]);

  phone = new FormControl('', [
    Validators.required,
    Validators.minLength(10),
    Validators.maxLength(10),
    Validators.pattern('^[0-9]*$'),
  ]);

  registerForm = new FormGroup<RegisterForm>({
    name: this.name,
    email: this.email,
    password: this.password,
    phone: this.phone,
  });

  register() {
    let data = this.userService.registration(this.registerForm)
      .subscribe((response:HttpResponse<any>) => {
        console.log(response);
        let cookie = response.body?.['token'];
        console.log(cookie);
        document.cookie = `token=${cookie}`;
    });
  }

  constructor(private userService: UserService) {}

  ngOnInit() {
  }
}
