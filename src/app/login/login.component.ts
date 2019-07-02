import { Component } from '@angular/core';
import { LoginService } from "../shared/content.service"
import { MenuComponent } from "../menu/menu.component"
import { from } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  Name: string;
  Pass: string;

  constructor(private loginService: LoginService, private menuComponent: MenuComponent) {
    this.Name = "";
    this.Pass = "";
  }
  Login() {
    this.loginService.CheckLogin(this.Name, this.Pass);
  }
  onClose() {
    this.menuComponent.openLogin = false
  }
}
