import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.page.html',
  styleUrls: ['./personal-details.page.scss'],
})
export class PersonalDetailsPage implements OnInit {

  private buttonColor: string = "primary";
  private buttonColor2: string = "primary";
  private buttonColor3: string = "primary";
  private buttonColor4: string = "primary";
  private buttonColor5: string = "primary";
  private buttonColor6: string = "primary";
  private buttonColor7: string = "primary";
  private buttonColor8: string = "primary";
  private buttonColor9: string = "primary";
  private buttonColor10: string = "primary";

  constructor() { }

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

  toggleNinthColor() {
    if(this.buttonColor9 === '#FF6E05') {
      this.buttonColor9 = '#FFFFFF';
    } else {
      this.buttonColor9 = '#FF6E05';
    }
  }
  toggleTenthColor() {
    if(this.buttonColor10 === '#FF6E05') {
      this.buttonColor10 = '#FFFFFF';
    } else {
      this.buttonColor10 = '#FF6E05';
    }
  }

}
