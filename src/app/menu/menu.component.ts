import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  current: number;
  openLogin: boolean;
  constructor() {
    this.current = 1;
    this.openLogin = false;
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
    this.openLogin = true;
  }
}
