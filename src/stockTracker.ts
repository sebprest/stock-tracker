import { Command, StockLevels } from "./types";
import { readStockLevelsFromFile } from "./utils";

export function processInstructions(
  command: string,
  stockLevelsToChangeBy: StockLevels,
  fileName: string,
): StockLevels {
  const stockLevels = readStockLevelsFromFile(fileName);

  for (const sku in stockLevelsToChangeBy) {
    const amount = stockLevelsToChangeBy[sku];
    switch (command) {
      case "set-stock":
        stockLevels[sku] = amount;
        break;
      case "add-stock":
        stockLevels[sku] = (stockLevels[sku] || 0) + amount;
        break;
      case "order":
        stockLevels[sku] = (stockLevels[sku] || 0) - amount;
        break;
      default:
        throw new Error("Invalid command");
    }
  }

  return stockLevels;
}
