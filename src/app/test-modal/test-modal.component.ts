import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-test-modal',
  templateUrl: './test-modal.component.html',
  styleUrls: ['./test-modal.component.scss'],
})
export class TestModalComponent {

  balanceInput = new FormControl('', Validators.required);

  constructor(private modalCtrl: ModalController) { }

  dismissModal(){
    this.modalCtrl.dismiss();
  }

}
