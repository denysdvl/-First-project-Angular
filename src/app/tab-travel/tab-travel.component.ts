import { Component, OnInit } from '@angular/core';
import { TravelService } from "../shared/content.service"
import { SmsService } from "../shared/sms.service"
import { LoginService } from "../shared/login.service"
@Component({
  selector: 'app-tab-travel',
  templateUrl: './tab-travel.component.html',
  styleUrls: ['./tab-travel.component.css']
})
export class TabTravelComponent implements OnInit {

  constructor(private travelService: TravelService,
    private smsService: SmsService,
    private loginService: LoginService
    ) { }

  ngOnInit() {
  }
  onShare(id){
    if(this.loginService.check === true){
  const myShare = this.travelService.travel.find(el => el.id === id);
    this.smsService.onShareSms(this.loginService.MyName, this.loginService.check, myShare);
    } else{
      alert("Please log in.")
    }
  }
}
