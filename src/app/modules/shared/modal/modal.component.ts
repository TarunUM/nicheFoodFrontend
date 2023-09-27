import { Component, ElementRef, Input, OnInit } from "@angular/core";
import { provideIcons } from "@ng-icons/core";
import { radixCross1 } from "@ng-icons/radix-icons";
import { ModalService } from "../../../services/modal.service";
import { ButtonsComponent } from "../buttons/buttons.component";
import { NgClass } from "@angular/common";

@Component({
  selector: 'app-modal',
  standalone: true,
  templateUrl: `./modal.component.html`,
  styleUrls: ['./modal.component.css'],
  imports: [ButtonsComponent, NgClass],
  providers: [provideIcons({ radixCross1 })],
})
export class ModalComponent implements OnInit{

  @Input() modalId: string = '';
  constructor(public modalService: ModalService, private el : ElementRef) {}

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement)
  }

  toggleModal(id: string) {
    this.modalService.toggleModal(id);
  }

  closeModal(id: string) {
    this.modalService.toggleModal(id);
  }

}
