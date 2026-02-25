//
//  command_explore.ts
//  
//
//  Created by Pete Colasacco on 2/24/26.
//


import type { State } from "./state.js";


export async function commandExplore(state: State, locToExplore: string) {
    //const mapUrl = "https://pokeapi.co/api/v2/location-area";
    try {
        const bigLocationString = await state.pokeAPI.fetchLocation(`${locToExplore}`);
        if (!bigLocationString) {
            console.log("I don't know if that location exists...\n");
            return;
        }
        // Poekemans loop
        console.log(`Exploring ${locToExplore} area...`);
        if (!bigLocationString.pokemon_encounters) {
            console.log("hmnmm.. no pokeman found...\n");
            return;
        }
        console.log("Found Pokemon:")
        for (const encounter of bigLocationString.pokemon_encounters) {
            console.log(` - ${encounter.pokemon.name}`);
        }
        return;
    } catch (e) {
        console.log(`something horrible happened when trying to explore ${locToExplore}:\n`);
        console.log(`${e}`);
        return;
    }
    
}
