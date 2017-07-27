import { Component, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

@Component({
  selector: 'app-modal-logout',
  templateUrl: './app.modal-logout.component.html',
  styleUrls: ['./app.modal-logout.component.css']
})
export class AppModalLogoutComponent {
  public modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  public closeTab(): void {
    this.modalRef.hide();
    this.modalRef = null;
  }
}
