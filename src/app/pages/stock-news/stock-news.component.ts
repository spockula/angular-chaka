import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/core/services/main.service';
import { IStockNews } from '../home/home.interfaces';

@Component({
  templateUrl: './stock-news.component.html',
  styleUrls: ['./stock-news.component.scss']
})
export class StockNewsComponent implements OnInit {
  news: IStockNews[] = [
    {
      "title": " ",
      "content": "", 
      "time": "",
      "image": ""
    }
  ]

  constructor(public mainService: MainService) { }

  ngOnInit(): void {
    this.mainService.getStockNews().subscribe((response: IStockNews []) => {
      this.news = response;
    })
  }

}
