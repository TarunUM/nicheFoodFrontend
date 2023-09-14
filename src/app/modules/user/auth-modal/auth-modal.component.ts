import { Component } from '@angular/core';
import {ModalService} from "../../../services/modal.service";

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.css'],
})
export class AuthModalComponent {
  constructor(public modalService: ModalService) {
    console.log(modalService.visible);
  }
}
