import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { CardsComponent } from './cards/cards.component';

@NgModule({
  declarations: [CardsComponent],
  imports: [CommonModule, ModalComponent],
  exports: [ModalComponent, CardsComponent],
  providers: [],
})
export class SharedModule {}
