import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TestModalComponent } from '../test-modal/test-modal.component';

@Component({
  selector: 'app-natural-science',
  templateUrl: './natural-science.page.html',
  styleUrls: ['./natural-science.page.scss'],
})
export class NaturalSciencePage implements OnInit {

  private buttonColor: string = "primary";
  private buttonColor2: string = "primary";
  private buttonColor3: string = "primary";
  private buttonColor4: string = "primary";
  private buttonColor5: string = "primary";
  private buttonColor6: string = "primary";
  private buttonColor7: string = "primary";
  private buttonColor8: string = "primary";

  ngOnInit() {
  }

  toggleFirstColor() {
    if(this.buttonColor === '#FF6E05') {
      this.buttonColor = '#FFFFFF';
    } else {
      this.buttonColor = '#FF6E05';
    }
  }
  toggleSecondColor() {
    if(this.buttonColor2 === '#FF6E05') {
      this.buttonColor2 = '#FFFFFF';
    } else {
      this.buttonColor2 = '#FF6E05';
    }
  }
  toggleThirdColor() {
    if(this.buttonColor3 === '#FF6E05') {
      this.buttonColor3 = '#FFFFFF';
    } else {
      this.buttonColor3 = '#FF6E05';
    }
  }
  toggleFourthColor() {
    if(this.buttonColor4 === '#FF6E05') {
      this.buttonColor4 = '#FFFFFF';
    } else {
      this.buttonColor4 = '#FF6E05';
    }
  }
  toggleFifthColor() {
    if(this.buttonColor5 === '#FF6E05') {
      this.buttonColor5 = '#FFFFFF';
    } else {
      this.buttonColor5 = '#FF6E05';
    }
  }
  toggleSixthColor() {
    if(this.buttonColor6 === '#FF6E05') {
      this.buttonColor6 = '#FFFFFF';
    } else {
      this.buttonColor6 = '#FF6E05';
    }
  }
  toggleSeventhColor() {
    if(this.buttonColor7 === '#FF6E05') {
      this.buttonColor7 = '#FFFFFF';
    } else {
      this.buttonColor7 = '#FF6E05';
    }
  }
  toggleEighthColor() {
    if(this.buttonColor8 === '#FF6E05') {
      this.buttonColor8 = '#FFFFFF';
    } else {
      this.buttonColor8 = '#FF6E05';
    }
  }

  trigger ($event) {
    $event.buttonDisabled = true;
    this.toggleFirstColor();  
  }

  constructor(private modalCtrl: ModalController) { }

  async nextLesson(){
    const modal = await this.modalCtrl.create({
      component: TestModalComponent
    });

    await modal.present();

  }

}
