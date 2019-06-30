import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notif-list',
  templateUrl: './notif-list.component.html',
  styleUrls: ['./notif-list.component.css']
})
export class NotifListComponent implements OnInit {
  notifCart: boolean; 
  constructor() {
   this.notifCart = true;
   }

  ngOnInit() {
  }
  Close(){
    this.notifCart = false;
    setTimeout(()=>{this.notifCart=true},4000);
  }
}
