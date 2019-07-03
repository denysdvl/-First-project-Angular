import { Component, OnInit } from '@angular/core';
import { CatsService } from "../shared/content.service"
import { SmsService } from "../shared/sms.service"
import { LoginService } from "../shared/login.service"
import { from } from 'rxjs';

@Component({
  selector: 'app-tab-cats',
  templateUrl: './tab-cats.component.html',
  styleUrls: ['./tab-cats.component.css']
})
export class TabCatsComponent implements OnInit {

  constructor(private catsService: CatsService,
     private smsService: SmsService,
     private loginService: LoginService) { }

  ngOnInit() {
  }
  onShare(id){
    if(this.loginService.check === true){
  const myShare = this.catsService.cats.find(el => el.id === id);
    this.smsService.onShareSms(this.loginService.MyName, this.loginService.check, myShare);
    } else{
      alert("Please log in.")
    }
  }
}
