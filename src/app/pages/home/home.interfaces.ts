export interface ICardInfo {
    sectorName: string;
    gains: number;
    gainDirection: gained;
    image?: string;
    cardSize: string;
  }
  export interface IStockCardInfo {
    stockName: string;
    gains: number;
    gainDirection: gained;
    price?: number;
    altCompany: string;
    altCompany2?: string;
  }

  export interface IStockNews {
    title: string;
    content: string;
    time: "";
    image?: string;
  }

  enum gained{
    positive = 0,
    negative = 1,
    normal = 2
  }
