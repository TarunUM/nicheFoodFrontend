import { Component } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from "../../modules/shared/buttons/buttons.component";
import { InputComponent } from "../../modules/shared/input/input.component";
import { CardsComponent } from "../../modules/shared/cards/cards.component";
import { ModalComponent } from "../../modules/shared/modal/modal.component";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CommonModule,
    ButtonsComponent,
    InputComponent,
    CardsComponent,
    ModalComponent,
  ],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  showFilter = false;

  constructor() {}

  toggleFilter() {
    this.showFilter = !this.showFilter;
  }
}
