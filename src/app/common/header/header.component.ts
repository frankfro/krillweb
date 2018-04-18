import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  style : string = "jumbotron bc";

  constructor() { }

  ngOnInit() {
  }

  changeStyle($event){
    this.style = $event.type == 'mouseover' ? 'jumbotron black-bg' : "jumbotron bc";
  }

}
