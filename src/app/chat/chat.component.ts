import { Component, OnInit } from '@angular/core';
import {SmsService} from "../shared/content.service"
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  firstName: string = '';
  myText:string="";
  OpenChat: boolean;

  constructor(private smsService: SmsService) { 
    this.OpenChat = false
  }
  ngOnInit() {
  }
  sendSms(){
    if(this.firstName === "" || this.myText === ""){
      alert("please fill in the fields");
    }else{
      this.smsService.sendSms(this.firstName, this.myText);
this.OpenChat = false;
this.firstName = "";
this.myText = "";
    }

  }
  openDialog(){
    this.OpenChat = true;
  }
  onNoClick(){
    this.OpenChat = false;
  }
}
