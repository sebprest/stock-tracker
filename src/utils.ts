import { readFileSync, writeFileSync } from "fs";
import { StockLevels } from "./types";

export function getStockLevelsFromArguments(
  args: Array<string | number>,
): StockLevels {
  const stockLevels: StockLevels = {};
  if (args.length % 2 !== 0) throw new Error("Invalid number of arguments");
  for (let i = 0; i < args.length; i += 2) {
    const sku = String(args[i]);
    const quantity = Number(args[i + 1]);
    if (isNaN(quantity)) throw new Error("The quantity must be a number");
    stockLevels[sku] = quantity;
  }
  return stockLevels;
}

export function readStockLevelsFromFile(filename: string): StockLevels {
  let content: string;
  try {
    content = readFileSync(filename, "utf-8");
  } catch (e) {
    return {};
  }
  const stockLevels: StockLevels = {};
  for (const line of content.split("\n")) {
    const [sku, quantity] = line.split(" ");
    stockLevels[sku] = parseInt(quantity);
  }
  return stockLevels;
}

export function writeStockLevelsToFile(
  filename: string,
  stockLevels: StockLevels,
): void {
  const content = Object.keys(stockLevels)
    .sort()
    .map((sku) => `${sku} ${stockLevels[sku]}`)
    .join("\n");
  writeFileSync(filename, content);
}
