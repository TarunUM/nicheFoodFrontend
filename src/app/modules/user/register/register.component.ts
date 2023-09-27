import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputComponent} from "../../shared/input/input.component";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, InputComponent],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: []
})
export class RegisterComponent {}
