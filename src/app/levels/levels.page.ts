import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-levels",
  templateUrl: "./levels.page.html",
  styleUrls: ["./levels.page.scss"],
})
export class LevelsPage {
  information: any[];
  constructor(private http: HttpClient, private router: Router) {
    this.http.get("assets/information.json").subscribe((res) => {
      this.information = res["items"];
    });
  }
  toggleSection(index) {
    this.information[index].open = !this.information[index].open;
  }
  toggleItem(index, childIndex) {
    this.information[index].children[childIndex].open = !this.information[index]
      .children[childIndex].open;
  }
  return() {
    this.router.navigateByUrl("/home");
  }
  go(where: string) {
    this.router.navigateByUrl(where);
  }
}
