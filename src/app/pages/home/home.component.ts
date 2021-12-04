import { MainService } from './../../core/services/main.service';
import { Component, OnInit } from '@angular/core';
import { ICardInfo } from './home.interfaces';


@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  sectorData: ICardInfo [] =  [{
    "sectorName": "",
    "gains": 0,
    "cardSize": "",
    "gainDirection": 0,
    "image": ""

}]

  constructor(public mainService: MainService) { }

  ngOnInit(): void {
    this.mainService.getSectorJson().subscribe((response: ICardInfo []) => {
      this.sectorData = response;
      console.log('se', this.sectorData)
    });
  }

}
