import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from "../../shared/input/input.component";
import { ButtonsComponent } from "../../shared/buttons/buttons.component";
import { FormsModule } from "@angular/forms";
import { NgxMaskDirective } from "ngx-mask";
import { UserService } from "../../../services/auth/user.service";
import { HttpResponse } from "@angular/common/http";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    InputComponent,
    ButtonsComponent,
    FormsModule,
    NgxMaskDirective,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  credentials:{email: string, password: string} = {
    email: '',
    password: '',
  };

  constructor(private userService : UserService) {
  }

  login() {
    this.userService.login(this.credentials).subscribe(
      (response:HttpResponse<any>) => {
        console.log(response.body?.['token']);
        document.cookie = `token=${response.body?.['token']}`;
      }
    );
  }
}
