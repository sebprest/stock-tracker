import yargs from "yargs";
import { addStockCommand, orderCommand, setStockCommand } from "./commands";

yargs
  .command(setStockCommand)
  .command(addStockCommand)
  .command(orderCommand)
  .usage("Usage: $0 <filename>")
  .demandCommand(1, "Please provide a filename.").argv;
