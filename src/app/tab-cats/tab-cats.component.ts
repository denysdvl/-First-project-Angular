import { Component, OnInit } from '@angular/core';
import { CatsService } from "../shared/content.service"

@Component({
  selector: 'app-tab-cats',
  templateUrl: './tab-cats.component.html',
  styleUrls: ['./tab-cats.component.css']
})
export class TabCatsComponent implements OnInit {

  constructor(private catsService: CatsService) { }

  ngOnInit() {
  }

}
