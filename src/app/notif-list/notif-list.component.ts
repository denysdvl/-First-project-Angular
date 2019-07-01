import { Component, OnInit, Injectable } from '@angular/core';
import { SmsService } from "../shared/content.service"

@Component({
  selector: 'app-notif-list',
  templateUrl: './notif-list.component.html',
  styleUrls: ['./notif-list.component.css']
})
@Injectable({ providedIn: 'root' })
export class NotifListComponent implements OnInit{
  notifCart : boolean;
  constructor(private smsService: SmsService) {
   this.notifCart = true;
   }

  ngOnInit() {
  }

  Close(id: number){
    this.smsService.onClose(id);
  }
  
}
