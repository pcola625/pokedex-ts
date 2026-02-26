import { Pokemon } from "./pokemon.js";
import { PokeAPI} from "./pokeapi";
import type { State } from "./state.js";


export async function commandCatch(state: State, pokeman: string) {
    //const mapUrl = "https://pokeapi.co/api/v2/location-area";
    try {
        const lePokeMon:Pokemon = await state.pokeAPI.getPokemon(`${pokeman}`);
        if (!lePokeMon) {
            console.log(`I don't think pokemon ${pokeman} exists... check spelling pls.`);
            return;
        }
        // Poekemans loop
        console.log(`Throwing a Pokeball at ${pokeman}...`);
        // do some random stuff
        const diceroll:number= Math.random();
        console.log(`my random value is ${diceroll}`);

        // using pokemons base experience?
        const assume_denominator: number = 200;
        console.log(`${pokeman} has base experience of ${lePokeMon.base_experience}.`);
        const someCalcuation = diceroll > lePokeMon.base_experience/assume_denominator;
        if (!someCalcuation) {
            console.log(`${pokeman} escaped!`);
            return;
        } else {
            state.myPokedex.push({pokeman: lePokeMon});
            console.log(`${pokeman} was caught! Great jorb...`);
        }
        
        return;
    } catch (e) {
        console.log(`something horrible happened when trying to catch ${pokeman}:\n`);
        console.log(`${e}`);
        return;
    }

}
