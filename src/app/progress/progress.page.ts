import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage implements OnInit {

  //constructor() { }
  constructor(private router: Router, private youtube: YoutubeVideoPlayer) {}
  return(){
    this.router.navigateByUrl('/home');
  }


  ngOnInit() {
  }
  watch(watch: string){
    this.youtube.openVideo(watch);

  }

}
