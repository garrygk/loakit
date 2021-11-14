import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smart-contract',
  templateUrl: './smart-contract.page.html',
  styleUrls: ['./smart-contract.page.scss'],
})
export class SmartContractPage implements OnInit {

  private buttonColor: string = "primary";
  private buttonColor2: string = "primary";
  private buttonColor3: string = "primary";

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

}
