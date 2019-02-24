import {Component, Inject, OnInit} from '@angular/core';
import {ProductsService} from '../../../products/services/products.service';
import {MdlDialogReference} from '@angular-mdl/core';
import {FormBuilder} from '@angular/forms';
import {Product} from '../../../products/models/product';

@Component({
  selector: 'app-message-modal',
  templateUrl: './message-modal.component.html',
  styleUrls: ['./message-modal.component.scss']
})
export class MessageModalComponent implements OnInit {
  message: string;

  constructor(private dialog: MdlDialogReference,
              private fb: FormBuilder,
              @Inject('message') message: string) {
  this.message = message;
  }



  ngOnInit() {
  }

  onYes() {
    this.dialog.hide();

  }

}
