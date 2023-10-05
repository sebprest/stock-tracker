import yargs, { CommandModule } from "yargs";
import { processInstructions } from "./stockTracker";
import { getStockLevelsFromArguments, writeStockLevelsToFile } from "./utils";

export const setStockCommand: CommandModule = {
  command: "set-stock",
  describe: "Set stock levels",
  handler: commandHandler,
};

export const addStockCommand: CommandModule = {
  command: "add-stock",
  describe: "Add stock levels",
  handler: commandHandler,
};

export const orderCommand: CommandModule = {
  command: "order",
  describe: "Create an order",
  handler: commandHandler,
};

function commandHandler(argv: yargs.ArgumentsCamelCase<{}>) {
  const command = String(argv._[0]);
  const stockLevelsToChangeBy = getStockLevelsFromArguments(
    argv._.slice(1, argv._.length - 1),
  );
  const fileName = String(argv._[argv._.length - 1]);
  const newStockLevels = processInstructions(
    command,
    stockLevelsToChangeBy,
    fileName,
  );
  writeStockLevelsToFile(fileName, newStockLevels);
}
