import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from "../../shared/input/input.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, InputComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {}
