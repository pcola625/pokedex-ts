import type { State } from "./state.js";

import { Pokemon } from "./pokemon.js";

export async function commandInspect(state: State, pokemon: string) {
    const pokefound = state.myPokedex[pokemon];
    if (!pokefound) {
        console.log(`You have not caught that pokeman.`);
        return;
    } else {
        console.log(`Name: ${pokefound.name}`);
        console.log(`Height: ${pokefound.height}`);
        console.log(`Weight: ${pokefound.weight}`);
        console.log(`Stats:`);
        for (const stat of pokefound.stats) {
            console.log( `-  ${stat.stat.name}: ${stat.base_stat}`);
        }
        console.log(`Types:`);
        for (const type of pokefound.types) {
            console.log(`-  ${type.type.name}`);
        }
    }

}

