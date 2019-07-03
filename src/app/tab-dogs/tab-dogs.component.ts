import { Component, OnInit } from '@angular/core';
import { DogsService } from "../shared/content.service"
import { SmsService } from "../shared/sms.service"
import { LoginService } from "../shared/login.service"

@Component({
  selector: 'app-tab-dogs',
  templateUrl: './tab-dogs.component.html',
  styleUrls: ['./tab-dogs.component.css']
})
export class TabDogsComponent implements OnInit {

  constructor(private dogsService: DogsService,
     private smsService: SmsService,
     private loginService: LoginService
     ) { }

  ngOnInit() {
  }
  onShare(id){
    if(this.loginService.check === true){
  const myShare = this.dogsService.dogs.find(el => el.id === id);
    this.smsService.onShareSms(this.loginService.MyName, this.loginService.check, myShare);
    } else{
      alert("Please log in.")
    }
  }
}
