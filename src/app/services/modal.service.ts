import { Injectable, Input } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modals: IModal[] = [];
  constructor() { }

  register(id: string) {
    this.modals.push({ id, visible: false });
  }

  unregister(id: string) {
    this.modals = this.modals.filter(modal => modal.id !== id);
  }

  toggleModal(id: string) {
    const modal = this.modals.find(modal => modal.id === id);
    if (modal) {
      modal.visible = !modal.visible;
    }
  }

  isModalVisible(id: string) {
    return this.modals.find(modal => modal.id === id)?.visible || false;
  }
}

interface IModal {
  id: string,
  visible: boolean
}
