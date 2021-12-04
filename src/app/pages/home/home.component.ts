import { MainService } from './../../core/services/main.service';
import { Component, OnInit } from '@angular/core';
import { ICardInfo, IStockCardInfo } from './home.interfaces';


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
  sectorCard: IStockCardInfo [] = [
    {
      "stockName": "",
      "gains": 0,
      "price": 0,
      "gainDirection": 0,
      "altCompany": "",
      "altCompany2": ""
    }
  ]

  constructor(public mainService: MainService) { }

  ngOnInit(): void {
    this.mainService.getSectorJson().subscribe((response: ICardInfo []) => {
      this.sectorData = response;
    });
    this.mainService.getStockInfo().subscribe((response: IStockCardInfo []) => {
      this.sectorCard = response;
    });
  }

}
