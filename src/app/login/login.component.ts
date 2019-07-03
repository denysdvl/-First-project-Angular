import { Component } from '@angular/core';
import { LoginService } from "../shared/login.service"
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
    this.Name = "";
    this.Pass = "";
    if(this.loginService.check === true){this.menuComponent.openLogin = false}
    
  }
  onClose() {
    this.menuComponent.openLogin = false
  }
}
