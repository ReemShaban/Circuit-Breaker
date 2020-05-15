import { Component, ViewChild } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  slideOptions: any;
  flashCardFlipped = false;
  slideOpts = {
    initialSlide: 1,
    speed: 400,
  };
  ionViewDidLoad() {}

  selectAnswer() {
    this.flashCardFlipped = true;
  }

  constructor() {}
}
