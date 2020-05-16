import { Component, ViewChild } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { QuizDataService } from "../providers/quiz-data-service";

@Component({
  selector: "app-quiz",
  templateUrl: "./quiz.page.html",
  styleUrls: ["./quiz.page.scss"],
})
export class QuizPage {
  @ViewChild("slides", { static: true }) slides: any;

  slideOpts = {
    initialSlide: 0,
    speed: 400,
  };
  questions: any;
  hasAnswered = false;
  score = 0;

  constructor(
    private router: Router,
    private quizDataService: QuizDataService,
    private route: ActivatedRoute
  ) {
    const quizID = this.route.snapshot.paramMap.get("id");
    console.log("quiz id is ", quizID);
    this.quizDataService.load(quizID).subscribe((data: any[]) => {
      this.questions = data["questions"];
    });
  }

  return() {
    this.router.navigateByUrl("/home");
  }

  nextSlide() {
    this.slides.lockSwipes(false);
    this.slides.slideNext();
    this.slides.lockSwipes(true);
  }

  selectAnswer(answer, question) {
    question.flashCardFlipped = true;
    this.hasAnswered = true;
    answer.selected = true;

    if (answer.correct) {
      this.score++;
    }

    setTimeout(() => {
      this.hasAnswered = false;
      this.nextSlide();
      answer.selected = false;
      question.flashCardFlipped = false;
    }, 3000);
  }
}
