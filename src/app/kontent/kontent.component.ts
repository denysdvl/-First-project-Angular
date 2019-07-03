import { Component, OnInit } from '@angular/core';
import { LoginService} from "../shared/login.service"
import { from } from 'rxjs';
@Component({
  selector: 'app-kontent',
  templateUrl: './kontent.component.html',
  styleUrls: ['./kontent.component.css']
})
export class KontentComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }
  checkLog(){

  }
}
