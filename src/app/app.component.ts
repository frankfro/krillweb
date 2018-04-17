import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    this.playAudio();
  }

  playAudio(){
    let audio = new Audio();
    audio.src = "assets/wav/short tv ending.mp3";
    audio.load();
    audio.play();
  }

}
