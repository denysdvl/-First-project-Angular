import { Component, OnInit } from '@angular/core';
import { TravelService } from "../shared/content.service"
@Component({
  selector: 'app-tab-travel',
  templateUrl: './tab-travel.component.html',
  styleUrls: ['./tab-travel.component.css']
})
export class TabTravelComponent implements OnInit {

  constructor(private travelService: TravelService) { }

  ngOnInit() {
  }

}
