import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxMaskDirective, provideNgxMask} from "ngx-mask";
import { FormControl, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, NgxMaskDirective, ReactiveFormsModule],
  providers: [provideNgxMask()],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  @Input() inputType: string = '';
  @Input() placeholder: string = '';
  @Input() name: string = '';
  @Input() format = '';
  @Input() formName: FormControl = new FormControl('');
}
