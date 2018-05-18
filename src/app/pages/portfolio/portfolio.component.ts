import { Component, OnInit } from '@angular/core';
import {TracksComponentModel} from "./tracks.component.model";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  public tracks = [
    new TracksComponentModel('Hollywood Driving Strings(3).mp3','Hollywood Driving Strings',''),
    new TracksComponentModel('Arrival strings (with dramatic violin lead).mp3','Arrival Strings',''),
    new TracksComponentModel('moby(3).mp3','Eclectic Electronica',''),
    new TracksComponentModel('oh vox.mp3','Eclectic Pop Beat Short Alternate Version',''),
    new TracksComponentModel('Battle Remorse.mp3','Battle Remorse',''),
    new TracksComponentModel('battle weary.mp3','Battle Weary',''),
    new TracksComponentModel('lost piano.mp3','Lost Piano',''),
    new TracksComponentModel('love\'s remorse - original.mp3','Love\'s Remorse Brass',''),
    new TracksComponentModel('lovesremorse.mp3','Love\'s Remorse',''),
    new TracksComponentModel('short dramatic strings with solo violin(2).mp3','Short Dramatic Strings with Solo Violin',''),
    new TracksComponentModel('Mid Eastern Drum and Harp.mp3','Middle Eastern Drums',''),
    new TracksComponentModel('piano lament(5).mp3','Piano Lament with Strings',''),
    new TracksComponentModel('Piano Lament (No Strings).mp3','Piano Lament no Strings',''),
    new TracksComponentModel('piano lament original.mp3','Piano Lament Strings version 2',''),
    new TracksComponentModel('Piano Stroll(5).mp3','Piano Theme',''),
    new TracksComponentModel('pink floyd 1.mp3','Cinematic Guitar 1',''),
    new TracksComponentModel('pink floyd 3.mp3','Cinematic Guitar 2',''),
    new TracksComponentModel('drilling guitar(2).mp3','Drilling Guitar',''),
    new TracksComponentModel('green night.mp3','Green Night (rough demo)',''),
    new TracksComponentModel('home again.mp3','Home Again Guitar Theme (rough demo)',''),
    new TracksComponentModel('home again orchestral.mp3','Home Again Orchestral Arrangement',''),
    new TracksComponentModel('home gin free solo.flac','Home Again Solo Guitar (rough demo)',''),
    new TracksComponentModel('Riverina.mp3','Riverina Theme',''),
    new TracksComponentModel('saw tech.mp3','Saw Tech',''),
    new TracksComponentModel('short bass and violin.mp3','Short Bass and Violin',''),
    new TracksComponentModel('short guitar and strings.mp3','Short Guitar and Strings',''),
    new TracksComponentModel('short tv ending(1).mp3','Short Tv Ending',''),
    new TracksComponentModel('Simple Moving Theme in Brass.mp3','Simple Moving Theme in Brass',''),
    new TracksComponentModel('Simple moving Theme in Piano.mp3','Simple Moving Theme in Piano',''),
    new TracksComponentModel('Simple movingTheme in Strings.mp3','Simple Moving Theme in Strings',''),
    new TracksComponentModel('Mixdown.mp3','Battle March with Male Choir',''),
    new TracksComponentModel('oboe and strings.mp3','Oboe and Strings (rough demo)',''),
    new TracksComponentModel('spanish broken guitar theme.mp3','Spanish Broken Guitar',''),
    new TracksComponentModel('staccato string building(2).mp3','Staccato String Building',''),
    new TracksComponentModel('Strings Harmony.mp3','Strings Harmony',''),
    new TracksComponentModel('Violin to Suspense Ending .mp3','Violin to Suspense Ending',''),
    new TracksComponentModel('advertisement.mp3','Guitar Rock Advertisement (rough demo)','')
  ];


  constructor() { }


  ngOnInit() {
  }

  public selectedName:any;

  public highlightRow(track) {
    this.selectedName = track.name;
  }


}
