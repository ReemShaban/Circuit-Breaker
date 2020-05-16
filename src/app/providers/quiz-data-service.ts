import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root",
})
export class QuizDataService {
  constructor(public http: HttpClient) {}

  load(ID) {
    return this.http.get("assets/data/quiz" + ID + ".json");
  }
}
