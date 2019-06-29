import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  icon: Element;
  constructor() { 
    this.icon = document.querySelector(".icon");
  }
  ToggelClass(){
    console.log(this.icon);
  }
  ngOnInit() {
  }

}
