import { CONFIG } from "lib/config";
import { BumpkinItem } from "./bumpkin";
import { InventoryItemName } from "./game";

// 1% tax on mainnet for testing
// 10% tax on sales
export const MARKETPLACE_TAX = CONFIG.NETWORK === "mainnet" ? 0.01 : 0.1;

export type CollectionName =
  | "collectibles"
  | "wearables"
  | "buds"
  | "resources";

export type Tradeable = {
  id: number;
  floor: number;
  supply: number;
  collection: CollectionName;
};

export type Offer = {
  tradeId: string;
  sfl: number;
  quantity: number;
  offeredById: number;
  offeredAt: number;
  type: "onchain" | "instant";
};

export type Listing = {
  id: string;
  sfl: number;
  quantity: number;
  listedById: number;
  listedAt: number;
  type: "onchain" | "instant";
};

export type PriceHistory = {
  date: string;
  volume: number;
  sales: number;
  price: number;
};

export type SaleHistory = {
  oneDayChange: number;
  sevenDayChange: number;
  thirtyDayChange: number;
  sales: {
    id: string;
    sfl: number;
    quantity: number;
    fulfilledAt: number;
    fulfilledBy: {
      id: number;
      username?: string;
      bumpkinUri?: string;
    };
  }[];
};

export type TradeableDetails = Tradeable & {
  offers: Offer[];
  listings: Listing[];
  history: PriceHistory[];
};

export type Marketplace = {
  items: Tradeable[];
};

type BudNFTName = `Bud #${number}`;

export type MarketplaceTradeableName =
  | InventoryItemName
  | BumpkinItem
  | BudNFTName;
