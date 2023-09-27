import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
  ],
    imports: [
        CommonModule,
        ModalComponent,
    ],
  exports: [
      ModalComponent
  ],
    providers: []
})
export class SharedModule {}
