import { Component, Input } from "@angular/core";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css'],
})
export class ButtonsComponent {
  @Input() name = 'Submit';
  @Input() variant: 'primary' | 'secondary' | 'outline' | 'ghost' | 'slate' | 'tabs'= 'primary';
  @Input() isDisabled = false;

  private buttonClassMap: {[key: string]: string} = {
    primary: 'bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded',
    secondary: 'bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded',
    outline: 'w-full ring-1 ring-white py-1 px-2 hover:bg-white hover:text-black transition duration-100 rounded',
    ghost: 'w-full py-1 px-2 hover:bg-white hover:text-black transition duration-100 rounded font-bold',
    slate: 'ring-2 ring-slate-900 rounded-md py-3 px-6 text-center bg-slate-900 text-white hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-800 focus:ring-opacity-50 hover:text-slate-400',
    tabs: 'w-full ring-1 ring-white py-1 px-2'
  }

  get buttonClass() {
    if (!this.buttonClassMap[this.variant]) {
      return this.buttonClassMap['primary'];
    }
    return this.buttonClassMap[this.variant];
  }
}
