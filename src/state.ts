//callback: (state: State) => void;

import { commandHelp } from "./command_help.js";
import { commandExit } from "./command_exit.js";
import { getCommands} from "./commands.js";
import { createInterface, type Interface } from "readline";
import { PokeAPI } from "./pokeapi.js";

export type State = {
	readline: Interface;
        commands: Record<string, CLICommand>;
	pokeAPI: PokeAPI;
	nextLocationsUrl: string;
	prevLocationsUrl: string;
};
 	
export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State, ...args: string[]) => Promise<void>;
};

export function initState(cacheInterval: number) {
	
  const rl = createInterface({
    		input: process.stdin,
    		output: process.stdout,
   		prompt: "Pokedex > ",
		});	
  return {
    readline: rl,
    commands: getCommands(),
    pokeAPI: new PokeAPI(cacheInterval),
    nextLocationsUrl: "",
    prevLocationsUrl: "",	
  };
};
