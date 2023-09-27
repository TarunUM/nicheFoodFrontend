import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from "@angular/router";
import {AuthModalComponent} from "../../modules/user/auth-modal/auth-modal.component";
import { ButtonsComponent } from "../../modules/shared/buttons/buttons.component";
import { ModalService } from "../../services/modal.service";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, AuthModalComponent, ButtonsComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(public modalService: ModalService) {}

  openModal($event: Event) {
    $event.preventDefault();
    this.modalService.toggleModal('auth');
  }
}
