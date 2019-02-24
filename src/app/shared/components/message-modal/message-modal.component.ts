import {Component, Inject, OnInit} from '@angular/core';
import {MdlDialogReference} from '@angular-mdl/core';

@Component({
  selector: 'app-message-modal',
  templateUrl: './message-modal.component.html',
  styleUrls: ['./message-modal.component.scss']
})
export class MessageModalComponent implements OnInit {
  message: string;

  constructor(private dialog: MdlDialogReference,
              @Inject('message') message: string) {
    this.message = message;
  }

  ngOnInit() {
  }

  onYes() {
    this.dialog.hide();
  }

  onNo() {
    this.dialog.hide();
  }

}
