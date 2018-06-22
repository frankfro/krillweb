import {Component, OnInit} from '@angular/core';
import {TracksComponentModel} from "./tracks.component.model";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  public tracks = [
    new TracksComponentModel('Hollywood Driving Strings(3).mp3', 'Hollywood Driving Strings', 'A fast intense music track signifying the build up to a major turning point or upheaval. A crescendo in the story or drama.'),
    new TracksComponentModel('Park Street.mp3','Piano Theme 2 Park Street (New)',''),
    new TracksComponentModel('Piano Stroll(5).mp3', 'Piano Theme', 'A wonderful rolling theme. Picture someone looking out the window to an ocean, strolling through the city reminiscing about a past lover. The subtle melancholy of this piano theme conjures up many different such images of a large warehouse apartment in New York.'),
    new TracksComponentModel('Arrival strings (with dramatic violin lead).mp3', 'Arrival Strings', 'An introduction that draws you in for an arrival with a moving melodic violin lead. Elements of highlands, ancient lands, arrival.'),
    new TracksComponentModel('Journey Trance.mp3','Journey Trance (New)',''),
    new TracksComponentModel('moby(3).mp3', 'Eclectic Electronica', ''),
    new TracksComponentModel('oh vox.mp3', 'Eclectic Pop Beat Short Alternate Version', 'A rhythmic little pulsing beat with some moving strings and poppy rhythmic female vocal sound. A great current sound that has a catchy harmony driving it a long.'),
    new TracksComponentModel('Battle Remorse.mp3', 'Battle Remorse', 'A full brass section gives a post battle feeling, somber reflection. Memorial of the fallen or reflection of defeat on a historic or ancient land.'),
    new TracksComponentModel('battle weary.mp3', 'Battle Weary', 'An extremely dark and haunting piece that portrays a dark night perhaps where something horrific as occurred such as a murder. Perfect for a dark crime thriller.'),
    new TracksComponentModel('lost piano.mp3', 'Lost Piano',
      'A short piano theme with a strong melodic drive, signifying a dramatic scene or moment of upheaval ' +
      'and turmoil. The ending is punctual and robust, perfect for a dramatic end to a scene.' +
      'A strong confident piano theme that, though short that is ideal for a end of scene or signifying a dramatic or pivotal moment in any TV or film drama.'),
    new TracksComponentModel('ominous 1 with violin.mp3','Ominous 1 with violin (New)',''),
    new TracksComponentModel('ominous 1.mp3','Ominous 1 (New)',''),
    new TracksComponentModel('ominous 2 with violin.mp3','Ominous 2 with violin (New)',''),
    new TracksComponentModel('ominous 2.mp3','Ominous 2 (New)',''),
    new TracksComponentModel('sample gtr 1.mp3','Sample gtr 1 (New)',''),
    new TracksComponentModel('short artic choir WITH GUITAR.mp3','Short artic choir WITH GUITAR (New)',''),
    new TracksComponentModel('short artic choir with lite percussion 2.mp3','Short artic choir with lite percussion 2 (New)',''),
    new TracksComponentModel('short artic choir.mp3','Short artic choir (New)',''),
    new TracksComponentModel('short harp ending 2 with extra ending.mp3','Short harp ending 2 with extra ending (New)',''),
    new TracksComponentModel('short harp ending 2(3).mp3','Short harp ending (New)',''),
    new TracksComponentModel('slowly building higher strings(2).mp3','Slowly building higher strings (New)',''),
    new TracksComponentModel('trill strings.mp3','Trill strings (New)',''),
    new TracksComponentModel('arpeggio 1 with piano and violin.mp3','Arpeggio 1 with piano and violin (New)',''),
    new TracksComponentModel('arpeggio 1(2).mp3','Arpeggio 1 (New)',''),
    new TracksComponentModel('cool march.mp3','Cool march (New)',''),
    new TracksComponentModel('Distant Symphony with Arpeggio.mp3','Distant Symphony with Arpeggio (New)',''),
    new TracksComponentModel('Distant Symphony with Piano.mp3','Distant Symphony with Piano (New)',''),
    new TracksComponentModel('Distant Symphony with Violin(2).mp3','Distant Symphony with Violin (New)',''),
    new TracksComponentModel('Distant Symphony.mp3','Distant Symphony (New)',''),
    new TracksComponentModel('guitar mars 2.mp3','guitar mars (New)',''),
    new TracksComponentModel('guitar with trill strings.mp3','guitar with trill strings (New)',''),
    new TracksComponentModel('short dramatic strings with solo violin(2).mp3', 'Short Dramatic Strings with Solo Violin', 'Driving strings arpeggio that has an underlying moving harmony that will draw you in. Perfect for a dramatic scene of change or a scene that is pivotal.'),
    new TracksComponentModel('Mid Eastern Drum and Harp.mp3', 'Middle Eastern Drums', ''),
    new TracksComponentModel('piano lament(5).mp3', 'Piano Lament with Strings', 'Piano resonates to create a somber, melancholic mood, perhaps of a broken heart or betrayal. This version has a simple harmony layer of strings to give more depth.'),
    new TracksComponentModel('Piano Lament (No Strings).mp3', 'Piano Lament no Strings', ''),
    new TracksComponentModel('piano lament original.mp3', 'Piano Lament Strings version 2', ''),
    new TracksComponentModel('pink floyd 1.mp3', 'Cinematic Guitar 1', 'A haunting guitar lead. Pink Floyd esque. A clean distortion guitar gives a dramatic background to a scene, possibly a crime or even a sultry bedroom scene. Crime Thriller, Police Drama or even General Drama genre.'),
    new TracksComponentModel('pink floyd 3.mp3', 'Cinematic Guitar 2', 'A haunting guitar lead. Pink Floyd esque. A clean distortion guitar gives a dramatic background to a scene, possibly a crime or even a sultry bedroom scene. Crime Thriller, Police Drama or even General Drama genre.'),
    new TracksComponentModel('drilling guitar(2).mp3', 'Drilling Guitar', ''),
    new TracksComponentModel('green night.mp3', 'Green Night (rough demo)', ''),
    new TracksComponentModel('home again.mp3', 'Home Again Guitar Theme (rough demo)', ''),
    new TracksComponentModel('home again orchestral.mp3', 'Home Again Orchestral Arrangement', ''),
    new TracksComponentModel('home gin free solo.flac', 'Home Again Solo Guitar (rough demo)', ''),
    new TracksComponentModel('Riverina.mp3', 'Riverina Theme', ''),
    new TracksComponentModel('saw tech.mp3', 'Saw Tech', 'A powerful synth conjures up an intense scene where by there is violence, danger, suspense.'),
    new TracksComponentModel('short bass and violin.mp3', 'Short Bass and Violin', ''),
    new TracksComponentModel('short guitar and strings.mp3', 'Short Guitar and Strings', ''),
    new TracksComponentModel('short tv ending(1).mp3', 'Short Tv Ending', ''),
    new TracksComponentModel('Simple Moving Theme in Brass.mp3', 'Simple Moving Theme in Brass',
      'A slow march, a post battle reflection. Perhaps reflecting on love lost or betrayal. The theme in Brass can conjure many images,' +
      'such as a battle field, an English landscape or Scottish Highlands and Castles or simply a tyranical figure in portrait.'),
    new TracksComponentModel('Simple moving Theme in Piano.mp3', 'Simple Moving Theme in Piano',
      'A slow march, a post battle reflection. Perhaps reflecting on love lost or betrayal. The theme in Piano can conjure many images,' +
      'such as a battle field, an English landscape or Scottish Highlands and Castles or simply a tyrannical figure in portrait.'),
    new TracksComponentModel('Simple movingTheme in Strings.mp3', 'Simple Moving Theme in Strings',
      'A slow march, a post battle reflection. Perhaps reflecting on love lost or betrayal. The theme in Strings can conjure many images,' +
      'such as a battle field, an English landscape or Scottish Highlands and Castles or simply a tyrannical figure in portrait.'),
    new TracksComponentModel('Mixdown.mp3', 'Battle March with Male Choir', ''),
    new TracksComponentModel('oboe and strings.mp3', 'Oboe and Strings (rough demo)', ''),
    new TracksComponentModel('spanish broken guitar theme.mp3', 'Spanish Broken Guitar', ''),
    new TracksComponentModel('staccato string building(2).mp3', 'Staccato String Building', ''),
    new TracksComponentModel('Strings Harmony.mp3', 'Strings Harmony', ''),
    new TracksComponentModel('Violin to Suspense Ending .mp3', 'Violin to Suspense Ending', ''),
    new TracksComponentModel('advertisement.mp3', 'Guitar Rock Advertisement (rough demo)', '')
  ];


  constructor() {
  }


  ngOnInit() {
  }

  public selectedName: any;

  public highlightRow(track) {
    this.selectedName = track.name;
  }

}
