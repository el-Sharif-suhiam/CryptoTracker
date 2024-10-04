export interface CoinsList {
  coins: Coin[];
}

export interface Coin {
  uuid: string;
  symbol: string;
  name: string;
  color: string;
  iconUrl: string;
  marketCap: string;
  price: string;
  listedAt: number;
  tier: number;
  change: string;
  rank: number;
  sparkline: string[];
  lowVolume: boolean;
  coinrankingUrl: string;
  "24hVolume": string;
  btcPrice: string;
  contractAddresses: string[];
}

export interface CryptoNews {
  title: string;
  summary: string;
  media: string[];
  link: string;
  authors: Author[];
  published: Date;
  category: string;
  subCategory: string;
  language: string;
  timeZone: string;
}

export interface Author {
  name: string;
}

export interface CoinDetails {
  uuid: string;
  symbol: string;
  name: string;
  description: string;
  color: string;
  iconUrl: string;
  websiteUrl: string;
  links: Link[];
  supply: Supply;
  numberOfMarkets: number;
  numberOfExchanges: number;
  "24hVolume": string;
  marketCap: string;
  fullyDilutedMarketCap: string;
  price: string;
  btcPrice: string;
  priceAt: number;
  change: string;
  rank: number;
  sparkline: Array<null | string>;
  allTimeHigh: AllTimeHigh;
  coinrankingUrl: string;
  tier: number;
  lowVolume: boolean;
  listedAt: number;
  hasContent: boolean;
  notices: null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  contractAddresses: any[];
  tags: string[];
}

export interface AllTimeHigh {
  price: string;
  timestamp: number;
}

export interface Link {
  name: string;
  url: string;
  type: string;
}

export interface Supply {
  confirmed: boolean;
  supplyAt: number;
  max: null;
  total: string;
  circulating: string;
}
