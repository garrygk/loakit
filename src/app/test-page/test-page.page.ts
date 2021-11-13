import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TestModalComponent } from '../test-modal/test-modal.component';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.page.html',
  styleUrls: ['./test-page.page.scss'],
})
export class TestPagePage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    this.nextLesson();
  }

  async nextLesson(){
    const modal = await this.modalCtrl.create({
      component: TestModalComponent
    });

    await modal.present();

  }

}
