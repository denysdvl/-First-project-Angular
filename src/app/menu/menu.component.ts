import { Component, OnInit } from '@angular/core';
import { LoginService } from "../shared/login.service"
import { from } from 'rxjs';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  current: number;
  openLogin: boolean;
  chekLog: boolean;
  constructor(private loginService: LoginService) {
    this.current = 1;
    this.openLogin = false;
    this.chekLog = true;
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
      this.openLogin = !this.openLogin;
    }
}
