import {Component, Input, TemplateRef} from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';

@Component({
  selector: 'app-modal',
  templateUrl: './app.modal-dropdown.component.html',
  styleUrls: ['./app.modal-dropdown.component.css']
})
export class AppModalComponent {
  @Input() item;
  public modalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
