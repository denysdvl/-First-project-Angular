import { Component, Injectable } from '@angular/core';
import { SmsService } from "../shared/sms.service"

@Component({
  selector: 'app-notif-list',
  templateUrl: './notif-list.component.html',
  styleUrls: ['./notif-list.component.css']
})
@Injectable({ providedIn: 'root' })
export class NotifListComponent {
  notifCart : boolean;
  constructor(private smsService: SmsService) {
   this.notifCart = true;
   }

  Close(id: number){
    this.smsService.onClose(id);
  }
  
}
