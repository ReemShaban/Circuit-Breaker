import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "flash-card",
  templateUrl: "./flash-card.component.html",
  styleUrls: ["./flash-card.component.scss"],
})
export class FlashCardComponent implements OnInit {
  constructor() {}
  @Input("isFlipped") flipCard: boolean;

  ngOnInit() {}
}
