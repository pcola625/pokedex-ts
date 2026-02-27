import {CLICommand} from "./state.js";
import {Interface} from "readline";
import {PokeAPI} from "./pokeapi.js";
import {Pokemon} from "./pokemon.js";

export function cleanInput(input:string): string[] {
	let output: string[] = input.replace(/\s+/g, " ").toLowerCase().trim().split(" ");
	return output;
}

export function startREPL(state: {
    readline: Interface;
    commands: Record<string, CLICommand>;
    pokeAPI: PokeAPI;
    nextLocationsUrl: string;
    prevLocationsUrl: string;
    myPokedex: Record<string, Pokemon>;
}): void {
    state.readline.prompt();

    state.readline.on("line", async (input) => {
	    const words = cleanInput(input);
    	    if (words.length === 0) {
      		state.readline.prompt();
      		return;
    		}
        let argv: string = ""
    	const commandName = words[0];
        if (words.length > 1) {
            argv = words[1]
        }

    	const cmd = state.commands[commandName];
    	if (!cmd) {
      		console.log(
        		`Unknown command: "${commandName}". Type "help" for a list of commands.`,
      		);
      		state.readline.prompt();
      		return;
    	}

    try {
        if (words.length == 0) {
            await cmd.callback(state);
        } else {
            await cmd.callback(state, argv);
        }
      
    } catch (e) {
      console.log(e);
    }

    state.readline.prompt();
  });
}

	

