export interface ICardInfo {
    sectorName: string;
    gains: number;
    gainDirection: gained;
    image?: string;
    cardSize: string;
  }

  enum gained{
    positive = 0,
    negative = 1,
    normal = 3
  }
