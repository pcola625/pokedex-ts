import { commandHelp } from "./command_help.js";
import { commandExit } from "./command_exit.js";
import { commandMapForward, commandMapBack } from "./command_map.js";
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
    		// can add more commands here
  	};
}
