import { Component, OnDestroy, OnInit } from "@angular/core";
import {ModalService} from "../../../services/modal.service";
import {ModalComponent} from "../../shared/modal/modal.component";
import {LoginComponent} from "../login/login.component";
import {RegisterComponent} from "../register/register.component";
import {TabsContainerComponent} from "../../shared/tabs-container/tabs-container.component";
import {TabsComponent} from "../../shared/tabs/tabs.component";
import { ButtonsComponent } from "../../shared/buttons/buttons.component";

@Component({
  selector: 'app-auth-modal',
  standalone: true,
  templateUrl: './auth-modal.component.html',
  imports: [
    AuthModalComponent,
    ModalComponent,
    LoginComponent,
    RegisterComponent,
    TabsContainerComponent,
    TabsComponent,
    ButtonsComponent,
  ],
  styleUrls: ['./auth-modal.component.css'],
})
export class AuthModalComponent implements OnInit, OnDestroy {
  constructor(public modalService: ModalService) {}

  ngOnInit(): void {
    this.modalService.register('auth');
  }

  ngOnDestroy(): void {
    this.modalService.unregister('auth');
  }

}
