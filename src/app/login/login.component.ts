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
  nonn: boolean;

  constructor(private loginService: LoginService, private menuComponent: MenuComponent) {
    this.Name = "";
    this.Pass = "";
    this.nonn = false
  }
  Login() {
    this.loginService.CheckLogin(this.Name, this.Pass);
    this.Name = "";
    this.Pass = "";
    if(this.loginService.check === true){
      this.menuComponent.openLogin = false; 
      this.menuComponent.chekLog = false}
    
  }
  onClose() {
    this.menuComponent.openLogin = false
  }
}




 