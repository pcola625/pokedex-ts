import { commandHelp } from "./command_help.js";
import { commandExit } from "./command_exit.js";
import { commandMapForward, commandMapBack } from "./command_map.js";
import { commandExplore } from "./command_explore.js"
import { commandCatch } from "./command_catch.js";
import { commandInspect } from "./command_inspect.js";
import { commandPokedex } from "./command_pokedex.js";


import { CLICommand } from "./state.js";

export function getCommands(): Record<string, CLICommand>  {
	return {
		exit: {
			 name: "exit",
			 description: "Exits the pokedex",
			 callback: commandExit,
    		},
		help: {
			name: "help",
			description: "Displays a help message",
			callback: commandHelp,
		},
		map: {
			name: "map",
			description: "Displays locations in Pokemon world 20 at a time",			  callback: commandMapForward,
		},	
		mapb: {
			name: "mapb",
			description: "Displays previous locations in Pokemon world 20 at a time",			  callback: commandMapBack,
		},
        explore: {
            name: "explore",
            description:
            "Explore the area and list pokemans in the area",
            callback: commandExplore,
        },
		catch: {
			name: "catch",
			description: "try to catch 'em all!",
			callback: commandCatch,
		},
		inspect: {
			name: "inspect",
			description: "Show details on one of the pokemans you have caught.",
			callback: commandInspect,
		},
		pokedex: {
			name: "pokedex",
			description: "List all the pokemen that you have caught. Gotta ketch em small!",
			callback: commandPokedex,
		}
    		// can add more commands here
  	}
}
