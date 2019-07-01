import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  current: number;
  constructor() {
    this.current = 2;
  }

  ngOnInit() {
  }
  OpenHome() {
    this.current = 1;
  }
  OpenChat() {
    this.current = 2;
  }
  OpenLogin() {
    this.current = 3;
  }
}
