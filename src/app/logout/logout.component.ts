import { Component } from '@angular/core';
import { MenuComponent } from "../menu/menu.component"
import { LoginService } from "../shared/login.service"
import { from } from 'rxjs';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent  {

  constructor(private menuComponent: MenuComponent, private loginService: LoginService) { }

  onClose() {
    this.menuComponent.openLogin = false
  }
  Logout(){
this.loginService.onLogout();
this.menuComponent.openLogin = false
  }
}
