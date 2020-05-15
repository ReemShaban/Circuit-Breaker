import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
})
export class QuizPage implements OnInit {
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

  constructor(private router: Router) { }

  ngOnInit() {
  }
  return() {
    this.router.navigateByUrl('/home');
   }

}
