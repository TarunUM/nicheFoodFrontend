import { Component} from "@angular/core";
import { RouterModule } from '@angular/router';
import {NgIf, NgOptimizedImage} from "@angular/common";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {HomeComponent} from "./components/home/home.component";
import {FooterComponent} from "./components/footer/footer.component";
import {SharedModule} from "./modules/shared/shared.module";
import {AuthModalComponent} from "./modules/user/auth-modal/auth-modal.component";
import { ModalService } from "./services/modal.service";

@Component({
  standalone: true,
  imports: [
      RouterModule,
    NgOptimizedImage,
    NgIf,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    SharedModule,
    AuthModalComponent
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent{
  title = 'frontend';
  constructor(public modalService: ModalService) {
  }
}
