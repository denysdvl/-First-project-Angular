import { Component, Injectable} from '@angular/core';
import { SmsService } from "../shared/sms.service"
import { LoginService } from "../shared/login.service"
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
@Injectable({ providedIn: 'root' })
export class ChatComponent {

  firstName: string;
  myText: string = "";
  OpenChat: boolean;
  onLog: boolean;

  constructor(private smsService: SmsService, private loginService: LoginService) {
    this.OpenChat = false;
    this.onLog = false;
    this.firstName = "";
  }

  sendSms() {
    if (this.firstName === "" || this.myText === "") {
      alert("please fill in the fields");
    } else {
      this.smsService.sendSms(this.firstName, this.myText, this.onLog);
      this.OpenChat = false;
      this.firstName = "";
      this.myText = "";
    }
  }

  openDialog() {
    this.OpenChat = true;
    if (this.loginService.check === true) {
      this.firstName = this.loginService.MyName;
      this.onLog = this.loginService.check
    }else{
      this.firstName = "";
      this.onLog = false;
    }
  }

  onNoClick() {
    this.OpenChat = false;
  }
}
