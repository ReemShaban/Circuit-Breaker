import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage implements OnInit {

  //constructor() { }
  constructor(private router: Router) {}
  return(){
    this.router.navigateByUrl('/home');
  }


  ngOnInit() {
  }

}
