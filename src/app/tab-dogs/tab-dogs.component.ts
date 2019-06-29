import { Component, OnInit } from '@angular/core';
import { DogsService } from "../shared/content.service"

@Component({
  selector: 'app-tab-dogs',
  templateUrl: './tab-dogs.component.html',
  styleUrls: ['./tab-dogs.component.css']
})
export class TabDogsComponent implements OnInit {

  constructor(private dogsService: DogsService) { }

  ngOnInit() {
  }

}
