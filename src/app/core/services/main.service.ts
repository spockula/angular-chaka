import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICardInfo, IStockCardInfo, IStockNews } from 'src/app/pages/home/home.interfaces';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(public httpClient: HttpClient) { }

//GN8H3C3WM9JN02KQ

  // fetchStockData() {
  //   return new Observable((observer) => {/* make http request & process */
  //     this.httpClient.get<IArtwork>(`${baseUrl.mainUrl}get-token-info/${tokenId}`, baseUrl.headers).subscribe(data => { 
  //         let item = data['data'];
  //         observer.next({
  //           id: item.id,
  //           category: item.category,
  //           tags: item.tags,
  //           owner: {
  //             id: item.id,
  //             image: item.media[0].media,
  //             username: item.owner
  //           },
  //           creator: {
  //             id: item.id,
  //             image: item.media[0].media,
  //             username: item.issuer,
  //             type: item.type
  //           },
  //           featuredImage: {
  //             media: item.media[0].media,
  //             mediaType: 0
  //           },
  //           isBidding: item.hasActiveAuction,
  //           gallery: item.media,
  //           description: item.description,
  //           price: 0,
  //           currency: item.currency,
  //           likes: 0,
  //           hasActiveAuction: item.hasActiveAuction,
  //           lastAuctionId: item.lastAuctionId,
  //           symbol: item.symbol,
  //           name: item.name,
  //           tokenId: parseInt(item.tokenId),
  //           dateIssued: item.dateIssued,
  //           sold: item.sold,
  //           type: item.type
  //       });
  //         observer.complete();
  //       }, err => {
  //           observer.next(artWorkJson['default'][0]);
  //           observer.complete()
  //       });

  //   });
  // }

  getSectorJson() {
    return this.httpClient.get <ICardInfo []>('./assets/data/sectorData.json')
  }

  getStockInfo() {
    return this.httpClient.get <IStockCardInfo []>('./assets/data/sectorCard.json')
  }

  getStockNews() {
    return this.httpClient.get <IStockNews[]>('./assets/data/stockNews.json')
  }
}
